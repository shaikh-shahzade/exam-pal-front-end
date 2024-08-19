import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStepperComponent } from './host-stepper.component';

describe('HostStepperComponent', () => {
  let component: HostStepperComponent;
  let fixture: ComponentFixture<HostStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
