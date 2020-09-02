import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlButtonComponent } from './ml-button.component';

describe('MlButtonComponent', () => {
  let component: MlButtonComponent;
  let fixture: ComponentFixture<MlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
