import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AttemptedQuestion } from 'src/app/model/attempted-question.model';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';

@Component({
  selector: 'app-quiz-attempt-table',
  templateUrl: './quiz-attempt-table.component.html',
  styleUrls: ['./quiz-attempt-table.component.css'],
})
export class QuizAttemptTableComponent implements AfterViewInit {
  @Input() attemptsObser: Observable<QuizAttempt[]>;

  attempts: QuizAttempt[];

  displayedColumns: string[] = ['position', 'User', 'Marks', 'Result', 'Date'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<QuizAttempt>;

  ngAfterViewInit() {
    this.attemptsObser.subscribe((val) => {
      this.attempts = val;
      this.dataSource = new MatTableDataSource<QuizAttempt>(this.attempts);
      this.dataSource.paginator = this.paginator;
    });
  }
}
