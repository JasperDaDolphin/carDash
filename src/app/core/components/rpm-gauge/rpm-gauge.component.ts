import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rpm-gauge',
  templateUrl: './rpm-gauge.component.html',
  styleUrls: ['./rpm-gauge.component.scss']
})
export class RpmGaugeComponent implements OnInit {

  constructor() { }

  gaugeType = 'arch';

  @Input('value')
  gaugeValue;

  gaugeThick = 10;
  gaugeLabel = 'RPM';
  gaugeAppendText = '';

  gaugeMin = 0;
  gaugeMax = 16384;

  ngOnInit(): void {}
}
