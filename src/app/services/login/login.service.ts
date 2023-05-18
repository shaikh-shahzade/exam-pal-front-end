import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginUser } from "src/app/Models/login-model.model";
import { AppConstants } from "src/app/uitility/constants-helper";
import { LocalStorageService } from "../LocalStorage/local-storage.service";
import { loginResponse } from "src/app/model/login-response";
import { UserDetails } from "src/app/model/UserDetails";
import { Observable, Subject } from "rxjs";

@Injectable()
export class LoginService
{
     userDetails!:UserDetails ;
    loggedIn : Subject<UserDetails> = new Subject<UserDetails>();
    constructor(private http:HttpClient ,private localStorage:LocalStorageService)
    {
        
        
    }
    login(loginDetails:LoginUser)
    {   
        this.http.post<loginResponse>(AppConstants.BASE_URL+"auth/generate" , loginDetails)
        .subscribe(
            (body) =>{
                    this.localStorage.setValue("token" , `Bearer ${body.token}`);
                    this.localStorage.setValue("user",JSON.stringify(body.userDetails));
                    this.userDetails = body.userDetails;
                    this.loggedIn.next(this.userDetails);
                }
            
            
        )
        
    }


}