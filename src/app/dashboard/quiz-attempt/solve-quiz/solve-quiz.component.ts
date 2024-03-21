import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router,ParamMap, RouterState, RouterStateSnapshot } from '@angular/router';
import { range } from 'rxjs';
import { Question } from 'src/app/model/question.model';
import { Quiz } from 'src/app/model/quiz.model';
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


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private solveService:SolveService,
    private route: ActivatedRoute,
    private quizService:QuizService) {}
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    let id = this.route.snapshot.queryParamMap.get("id")||""
    
    this.quizService.getQuizById(id).subscribe((value:Quiz)=>{
      this.quiz = value;
      this.questions=value.question;
      console.log(this.questions)
    })
    
  }
}
