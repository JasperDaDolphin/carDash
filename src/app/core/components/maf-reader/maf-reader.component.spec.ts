import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafReaderComponent } from './maf-reader.component';

describe('MafReaderComponent', () => {
  let component: MafReaderComponent;
  let fixture: ComponentFixture<MafReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
