import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupCall(user:User)
  {
    //send to backENd
    console.log(user);
    this.httpClient.get("")


  }
  constructor(private httpClient:HttpClient) { }
}
