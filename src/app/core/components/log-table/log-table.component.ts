import { Component, OnInit, Input} from '@angular/core';

import { Response } from '../../models/response.model';

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.scss']
})
export class LogTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input("logs") logs: Array<Response> = [];
}
