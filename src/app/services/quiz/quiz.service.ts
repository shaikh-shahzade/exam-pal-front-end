import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private httpNonAuthClient:HttpClient; 
  private quizList:Quiz[];
  
  constructor(private httpClient:HttpClient
    ,private httpBackend:HttpBackend,
    private router:Router) {
    this.httpNonAuthClient= new HttpClient(httpBackend);
   }

  createNewQuiz(quiz:Quiz)
  {
    return this.httpClient.post<Quiz>(AppConstants.BASE_URL+"quiz" , quiz)
    
  }
  getQuizById(id:String)
  {
    return this.httpNonAuthClient
    .get<Quiz>(AppConstants.BASE_URL+"quiz/"+id);
  }
  retrieveQuizes()
  {
    return this.httpNonAuthClient
    .get<Quiz[]>(AppConstants.BASE_URL+"quiz/list");
    
  }
  
}
