import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlButtonSolidComponent } from './ml-button-solid.component';

describe('MlButtonSolidComponent', () => {
  let component: MlButtonSolidComponent;
  let fixture: ComponentFixture<MlButtonSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlButtonSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlButtonSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
