import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlSideEffectsComponent } from './ml-side-effects.component';

describe('MlSideEffectsComponent', () => {
  let component: MlSideEffectsComponent;
  let fixture: ComponentFixture<MlSideEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MlSideEffectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlSideEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
