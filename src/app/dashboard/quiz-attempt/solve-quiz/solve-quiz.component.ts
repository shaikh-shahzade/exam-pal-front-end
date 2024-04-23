import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router,ParamMap, RouterState, RouterStateSnapshot } from '@angular/router';
import { of, range } from 'rxjs';
import { AttemptedQuestion } from 'src/app/model/attempted-question.model';
import { Question } from 'src/app/model/question.model';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { Quiz } from 'src/app/model/quiz.model';
import { Result } from 'src/app/model/result.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { SolveService } from 'src/app/services/solve/solve.service';

@Component({
  selector: 'app-solve-quiz',
  templateUrl: './solve-quiz.component.html',
  styleUrls: ['./solve-quiz.component.css'],

})
export class SolveQuizComponent implements AfterViewInit {

   quiz:Quiz;
   questions:Question[];
   quizAttempt:QuizAttempt;
   questionAtemptMap:Map<Question,AttemptedQuestion>;

  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private solveService:SolveService,
    private route: ActivatedRoute,
    private quizService:QuizService
  ) {
    
    this.questionAtemptMap= new Map();
  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    let id = this.route.snapshot.queryParamMap.get("id")||""
    
    this.quizService.getQuizById(id).subscribe((value:Quiz)=>{
      this.quiz = value;
      this.questions=value.question;

      this.questions.forEach(q=>{this.questionAtemptMap.set(q,new AttemptedQuestion(q))});
      
    });

    this.solveService.startQuiz( new QuizAttempt(),id).subscribe(val=>
      {this.quizAttempt=val
      console.log(val)
      }
    )
    
  }

  submitQuiz()
  {
    this.quizAttempt.result = new Result();
    this.quizAttempt.result.attemptedQuestion = [] 
    for(const q of this.questionAtemptMap.values())
      {
        if(q.answer!=null)
          this.quizAttempt.result.attemptedQuestion.push(q);
      }
    
    console.log(this.quizAttempt)
     this.solveService.submitQuiz(this.quizAttempt).subscribe((val)=>{
         console.log(val)
    })
  }
}
