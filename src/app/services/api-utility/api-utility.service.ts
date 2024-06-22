import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { Result } from 'src/app/model/result.model';
import { User } from 'src/app/model/user-model.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilityService {

  getAttemptsByHost()
  {
    return this.httpClient.get<QuizAttempt[]>(AppConstants.BASE_URL+`attempt/host/results`);
  }
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
    return this.httpClient.post<Category>(AppConstants.BASE_URL+"category",category);
  }
  getAllUsers()
  {
    return this.httpClient.get<User[]>(AppConstants.BASE_URL+'user');
  }

  constructor(private httpClient:HttpClient) { }
}
