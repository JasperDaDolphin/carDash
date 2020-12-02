import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-throttlepos-reader',
  templateUrl: './throttlepos-reader.component.html',
  styleUrls: ['./throttlepos-reader.component.scss']
})
export class ThrottleposReaderComponent implements OnInit {

  constructor() { }

  @Input('value')
  value = 0;

  ngOnInit(): void {
  }
}
