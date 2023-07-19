import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }

  createNewQuiz(quiz:Quiz)
  {
    
    this.httpClient.post<Quiz>(AppConstants.BASE_URL+"quiz" , quiz)
    .subscribe((val)=>{
      if(val)
      console.log(val);});
  }
}
