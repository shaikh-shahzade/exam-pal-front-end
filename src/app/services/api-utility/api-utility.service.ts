import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { Result } from 'src/app/model/result.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilityService {

  getAttemptsByQuiz(quizId:string)
  {
    return this.httpClient.get<QuizAttempt[]>(AppConstants.BASE_URL+`attempt/${quizId}/results`);
  }
  getAttempt(resId:string)
  {
    return this.httpClient.get<QuizAttempt>(AppConstants.BASE_URL+`attempt/result/${resId}`);
  }
  getCategories()
  {
    return this.httpClient.get<Category[]>(AppConstants.BASE_URL+"category")
  }
  addCategories(category:Category)
  {
    console.log("create")
    return this.httpClient.post<Category>(AppConstants.BASE_URL+"category",category);
  }

  constructor(private httpClient:HttpClient) { }
}
