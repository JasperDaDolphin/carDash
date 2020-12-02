import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VssGaugeComponent } from './vss-gauge.component';

describe('VssGaugeComponent', () => {
  let component: VssGaugeComponent;
  let fixture: ComponentFixture<VssGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VssGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VssGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
