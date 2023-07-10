import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignExamsComponent } from './assign-exams.component';

describe('AssignExamsComponent', () => {
  let component: AssignExamsComponent;
  let fixture: ComponentFixture<AssignExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
