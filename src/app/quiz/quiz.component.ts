import {
  AfterContentInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { QuizService } from '../services/quiz/quiz.service';
import { Quiz } from '../model/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'questions',
    'solve',
  ];
  private quizList: Quiz[];
  dataSource: MatTableDataSource<QuizIndexing>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private quizService: QuizService) {}
  ngOnInit(): void {
    this.quizList = [];
    this.quizService.retrieveQuizes().subscribe((val) => {
      if (val) this.quizList = val;
      let temp: QuizIndexing[] = this.quizList.map(
        (value: Quiz, ind: number) => {
          return { index: ind + 1, val: value };
        }
      );
      this.dataSource = new MatTableDataSource<QuizIndexing>(temp);
      this.dataSource.paginator = this.paginator;
      console.log(val);
    });
  }

  ngAfterViewInit() {}
}
interface QuizIndexing {
  index: number;
  val: Quiz;
}
