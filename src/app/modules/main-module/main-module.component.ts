import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { SocketService } from '../../core/services/socket.service';

import { Error } from '../../core/models/error.model';

import { Response } from '../../core/models/response.model';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.scss'],
})
export class MainModuleComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private socketService: SocketService) {}

  public menuOpen: Boolean = false;
  public loaded: Boolean = true;

  public rpm: Number = 0;
  public vss: Number = 0;
  public throttlepos: Number = 0;
  public temp: Number = 0;
  public maf: Number = 0;

  public errors: Array<Error> = [];

  public logs: Array<Response> = [];

  ngOnInit(): void {
    this.initEvents();
  }
  
  ngAfterViewInit() {}

  ngOnDestroy() { }

  toggleMenu() {
	  this.menuOpen = !this.menuOpen;
  }

  onKey(event) {
    switch (event.which) {
      case 32:
        this.toggleMenu();
        break;
      default:
      // code block
    }
  }

  requestErrors() {
    this.socketService.emit('requestdtc', undefined);
  }

  clearErrors() {
    this.socketService.emit('cleardtc', undefined);
    this.errors = [];
  }

  initEvents(){
    this.listenRpmEvent();
    this.listenVssEvent();
    this.listenThrottleposEvent();
    this.listenTempEvent();
    this.listenMafEvent();
    this.listenRequestdtcEvent();
  } 

  listenRequestdtcEvent() {
    this.socketService.listen('requestdtc').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      if (res.value != undefined){
        res.value.errors.forEach(error => {
          if (!this.errors.some(elem => elem.code === error.code)) {
            this.errors.push(error);
          }
        });
      }
    });
  }

  listenRpmEvent() {
    this.socketService.listen('rpm').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      let rpm = Math.ceil(res.value);
      this.rpm = rpm;
    });
  }

  listenVssEvent() {
    this.socketService.listen('vss').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      let vss = Math.ceil(res.value);
      this.vss = vss;
    });
  }

  listenThrottleposEvent() {
    this.socketService.listen('throttlepos').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      let throttlepos = Math.ceil(res.value);
      this.throttlepos = throttlepos;
    });
  }  

  listenTempEvent() {
    this.socketService.listen('temp').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      this.temp = res.value;
    });
  }

  listenMafEvent() {
    this.socketService.listen('maf').subscribe((data) => {
      let res: Response = <Response>data;
      this.addLog(res);
      this.maf = res.value;
    });
  }

  addLog(res: Response) {
    if(this.logs.length > 10) {
      this.logs.pop();
      this.logs.unshift(res);
    }
    else {
      this.logs.unshift(res);
    }
  }
}
