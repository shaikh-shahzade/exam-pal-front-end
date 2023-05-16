import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginUser } from "src/app/Models/login-model.model";
import { AppConstants } from "src/app/uitility/constants-helper";
import { LocalStorageService } from "../LocalStorage/local-storage.service";
import { loginResponse } from "src/app/model/login-response";

@Injectable()
export class LoginService
{
    constructor(private http:HttpClient ,private localStorage:LocalStorageService)
    {}
    login(loginDetails:LoginUser)
    {   
        console.log(loginDetails)
        this.http.post<loginResponse>(AppConstants.BASE_URL+"auth/generate" , loginDetails).subscribe(
            (body:loginResponse) =>{console.log(body.userDetails)}
            
            
        )
        
    }
}