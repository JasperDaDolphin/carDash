import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempReaderComponent } from './temp-reader.component';

describe('TempReaderComponent', () => {
  let component: TempReaderComponent;
  let fixture: ComponentFixture<TempReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
