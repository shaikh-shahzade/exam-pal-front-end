import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class SolveService {


  constructor(private httpClient:HttpClient) { }

  startQuiz(quizId:Number)
  {

  }
  private getQuestionsByQuizId(id:String)
  {
    return this.httpClient.get(AppConstants.BASE_URL+"/question/quiz/"+id);
  }

}
