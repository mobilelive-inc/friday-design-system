import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlButtonClearComponent } from './ml-button-clear.component';

describe('MlButtonClearComponent', () => {
  let component: MlButtonClearComponent;
  let fixture: ComponentFixture<MlButtonClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlButtonClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlButtonClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
