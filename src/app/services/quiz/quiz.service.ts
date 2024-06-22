import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService { 
  private quizList:Quiz[];
  
  constructor(private httpClient:HttpClient,
    private router:Router) {
   }

  createNewQuiz(quiz:Quiz)
  {
    
    return this.httpClient.post<Quiz>(AppConstants.BASE_URL+"quiz" , quiz)
    
  }
  getQuizById(id:String)
  {
    return this.httpClient.get<Quiz>(AppConstants.BASE_URL+"quiz/"+id);
  }
  retrieveQuizes()
  {
    return this.httpClient
    .get<Quiz[]>(AppConstants.BASE_URL+"quiz/list");
    
  }
  getQuizByHost()
  {
    return this.httpClient
    .get<Quiz[]>(AppConstants.BASE_URL+"quiz/list",{params:{host:true}})
  }
  updateQuiz(quiz:Quiz)
  {
    return this.httpClient
    .patch<Quiz>(AppConstants.BASE_URL+'quiz/'+quiz.qid , quiz)
  }
  
}
