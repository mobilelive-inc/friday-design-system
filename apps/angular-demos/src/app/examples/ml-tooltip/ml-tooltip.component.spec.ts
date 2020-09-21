import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlTooltipComponent } from './ml-tooltip.component';

describe('MlTooltipComponent', () => {
  let component: MlTooltipComponent;
  let fixture: ComponentFixture<MlTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
