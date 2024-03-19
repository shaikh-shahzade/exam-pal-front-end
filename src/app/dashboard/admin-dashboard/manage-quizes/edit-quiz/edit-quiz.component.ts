import { AfterViewInit, Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements AfterViewInit {
  active_quiz:Observable<Quiz>;
  categories:Observable<Category[]>
  quiz:Quiz;

  constructor(private quiz_active_service:ActiveQuizService,
     private apiService:ApiUtilityService,
     private quizService:QuizService)
  {

  }

  updateQuiz()
  {
    console.log(this.quiz)
    this.quiz.user=null
    this.quizService.updateQuiz(this.quiz).subscribe(val=>this.quiz=val);
  }
  addCategory(category:string){
    console.log(category)
     let cat2:Category = new Category();
    cat2.title=category;
    console.log(cat2)
    this.apiService.addCategories(cat2).subscribe(val=>{
      this.categories=this.apiService.getCategories();
    });
    this.categories=this.apiService.getCategories();
  }

  ngAfterViewInit(): void {
    this.active_quiz = this.quiz_active_service.quiz;
    this.quiz_active_service.quiz.subscribe(val=>this.quiz=val)
    this.categories=this.apiService.getCategories();
  }
}
