import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlButtonDirectiveComponent } from './ml-button-directive.component';

describe('MlButtonDirectiveComponent', () => {
  let component: MlButtonDirectiveComponent;
  let fixture: ComponentFixture<MlButtonDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlButtonDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlButtonDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
