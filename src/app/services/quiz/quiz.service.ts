import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private httpNonAuthClient:HttpClient; 
  private quizList:Quiz[];
  
  constructor(private httpClient:HttpClient,private httpBackend:HttpBackend) {
    this.httpNonAuthClient= new HttpClient(httpBackend);
   }

  createNewQuiz(quiz:Quiz)
  {
    
    this.httpClient.post<Quiz>(AppConstants.BASE_URL+"quiz" , quiz)
    .subscribe((val)=>{
      if(val)
      console.log(val);});
  }
  getQuizById(id:String)
  {
    return this.httpNonAuthClient
    .get<Quiz>(AppConstants.BASE_URL+"quiz/"+id);
  }
  retrieveQuizes()
  {
    return this.httpNonAuthClient
    .get<Quiz[]>(AppConstants.BASE_URL+"quiz/retrieve");
    
  }
  
}
