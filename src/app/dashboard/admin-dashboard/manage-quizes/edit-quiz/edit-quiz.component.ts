import { AfterViewInit, Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Answer } from 'src/app/model/answer.model';
import { Category } from 'src/app/model/category.model';
import { Question } from 'src/app/model/question.model';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css'],
})
export class EditQuizComponent implements AfterViewInit {
  active_quiz: Quiz;
  categories: Observable<Category[]>;
  quiz: Quiz;
  selectedQuestion: Question = new Question();

  constructor(
    private quiz_active_service: ActiveQuizService,
    private apiService: ApiUtilityService,
    private quizService: QuizService
  ) {}
  getQuiz(quiz: Question) {
    return quiz;
  }
  updateQuiz() {
    console.log(this.quiz);
    this.quizService
      .updateQuiz(this.quiz)
      .subscribe((val) => (this.quiz = val));
  }
  addQuestion() {
    console.log('callled');
    if (this.quiz.question == undefined) this.quiz.question = [];
    this.quiz.question.push(new Question());
  }
  addAnswer(question: Question) {
    if (question != undefined) {
      if (question.answers == undefined) question.answers = [];
      question.answers.push(new Answer());
    }
  }
  changeCorrect(answer: Answer) {
    this.selectedQuestion.answers.forEach((val) => (val.isCorrect = false));
    answer.isCorrect = true;
  }
  openDialog(q: Question): void {
    this.selectedQuestion = q;
  }
  changeCategory(cat: Category) {
    this.quiz.category = cat;
  }
  addCategory(category: string) {
    let cat2: Category = new Category();
    cat2.title = category;
    this.apiService.addCategories(cat2).subscribe((val) => {
      this.categories = this.apiService.getCategories();
    });
  }

  ngAfterViewInit(): void {
    this.active_quiz = this.quiz_active_service.quiz;
    this.quiz = this.active_quiz;
    this.categories = this.apiService.getCategories();
  }
}
