import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-temp-reader',
  templateUrl: './temp-reader.component.html',
  styleUrls: ['./temp-reader.component.scss']
})
export class TempReaderComponent implements OnInit {

  constructor() { }

  @Input('value')
  value = 0;

  ngOnInit(): void {
  }
}
