import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  observer: Observer<any>;
  readonly url = "ws://localhost:8080";

  constructor() {
    this.socket = socketIo.io(this.url);
  }

  listen(eventName: string){
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data)
  }
}