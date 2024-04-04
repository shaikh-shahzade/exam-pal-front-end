import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAttemptTableComponent } from './quiz-attempt-table.component';

describe('QuizAttemptTableComponent', () => {
  let component: QuizAttemptTableComponent;
  let fixture: ComponentFixture<QuizAttemptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAttemptTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAttemptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
