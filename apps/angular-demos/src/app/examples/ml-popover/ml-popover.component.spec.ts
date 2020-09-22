import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlPopoverComponent } from './ml-popover.component';

describe('MlPopoverComponent', () => {
  let component: MlPopoverComponent;
  let fixture: ComponentFixture<MlPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
