import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-vss-gauge',
  templateUrl: './vss-gauge.component.html',
  styleUrls: ['./vss-gauge.component.scss']
})
export class VssGaugeComponent implements OnInit {

  constructor() { }

  gaugeType = 'arch';

  @Input('value')
  gaugeValue;

  gaugeMin = 0;
  gaugeMax = 255;
  
  gaugeAppendText = 'km/hr';

  gaugeThick = 10;
  gaugeLabel = 'Speed';

  ngOnInit(): void {}
}
