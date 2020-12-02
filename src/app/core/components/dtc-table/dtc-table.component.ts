import { Component, OnInit, Input} from '@angular/core';
import { Error } from '../../models/error.model';

@Component({
  selector: 'app-dtc-table',
  templateUrl: './dtc-table.component.html',
  styleUrls: ['./dtc-table.component.scss']
})
export class DtcTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input("errors") errors: Array<Error> = [];
}
