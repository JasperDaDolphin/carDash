import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maf-reader',
  templateUrl: './maf-reader.component.html',
  styleUrls: ['./maf-reader.component.scss']
})
export class MafReaderComponent implements OnInit {

  constructor() { }

  @Input('value')
  value = 0;

  ngOnInit(): void {
  }
}
