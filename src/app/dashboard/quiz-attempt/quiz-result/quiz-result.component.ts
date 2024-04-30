import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { Result } from 'src/app/model/result.model';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css'],
})
export class QuizResultComponent implements AfterViewInit {
  result: Result;
  attempt: QuizAttempt;
  passingScore: Number;
  correctAnswers: Number;
  passed: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiUtility: ApiUtilityService
  ) {}
  ngAfterViewInit(): void {
    const attemptID = this.route.snapshot.paramMap.get('id');
    if (attemptID != null)
      this.apiUtility.getAttempt(attemptID).subscribe((att) => {
        this.attempt = att;
        this.passingScore =
          (this.attempt.result.marks.valueOf() /
            this.attempt.quiz.maxMarks.valueOf()) *
          100;
        this.passed =
          this.attempt.result.marks >= this.attempt.quiz.passingMarks;
        this.passingScore = this.attempt.result.correctAnswers;
      });
  }

  focusReviewSection(reviewQuiz: HTMLDivElement) {
    setTimeout(() => {
      reviewQuiz.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }, 100);
  }
}
