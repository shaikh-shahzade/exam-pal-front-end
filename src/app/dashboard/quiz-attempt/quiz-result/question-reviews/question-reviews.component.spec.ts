import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReviewsComponent } from './question-reviews.component';

describe('QuestionReviewsComponent', () => {
  let component: QuestionReviewsComponent;
  let fixture: ComponentFixture<QuestionReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
