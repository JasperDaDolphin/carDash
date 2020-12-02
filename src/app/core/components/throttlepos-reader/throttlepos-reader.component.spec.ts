import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleposReaderComponent } from './throttlepos-reader.component';

describe('ThrottleposReaderComponent', () => {
  let component: ThrottleposReaderComponent;
  let fixture: ComponentFixture<ThrottleposReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottleposReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleposReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
