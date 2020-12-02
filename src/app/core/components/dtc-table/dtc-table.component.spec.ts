import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcTableComponent } from './dtc-table.component';

describe('DtcTableComponent', () => {
  let component: DtcTableComponent;
  let fixture: ComponentFixture<DtcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
