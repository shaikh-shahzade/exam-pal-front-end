import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class SolveService {

  
  constructor(private httpClient:HttpClient) { }

  startQuiz(quizAttempt:QuizAttempt, quizId:string)
  {
    return this.httpClient.post<QuizAttempt>(AppConstants.BASE_URL+"attempt" ,{},  { headers:{ ["quizId"]: quizId }} )
  }
  getQuestionsByQuizId(id:String)
  {
    return this.httpClient.get(AppConstants.BASE_URL+"/question/quiz/"+id);
  }

  submitQuiz(quizAttempt:QuizAttempt)
  {
    return this.httpClient.post<QuizAttempt>(AppConstants.BASE_URL+"attempt" ,quizAttempt )
  }
  
}
