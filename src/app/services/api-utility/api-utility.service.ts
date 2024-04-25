import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Result } from 'src/app/model/result.model';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilityService {


  getResult(resId:string)
  {
    return this.httpClient.get<Result>(AppConstants.BASE_URL+`attempt/result/${resId}`);
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
