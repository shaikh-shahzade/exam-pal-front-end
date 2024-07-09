import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHandlerComponent } from './temp-handler.component';

describe('TempHandlerComponent', () => {
  let component: TempHandlerComponent;
  let fixture: ComponentFixture<TempHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
