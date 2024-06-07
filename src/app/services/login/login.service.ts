import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginUser } from "src/app/model/login-model.model";
import { AppConstants } from "src/app/uitility/constants-helper";
import { LocalStorageService } from "../LocalStorage/local-storage.service";
import { loginResponse } from "src/app/model/login-response";
import { UserDetails } from "src/app/model/UserDetails";
import { Observable, Subject } from "rxjs";
import { SwalModule } from "@sweetalert2/ngx-sweetalert2/lib/sweetalert2-loader.service";
import Swal from "sweetalert2";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class LoginService
{
    userDetails!:UserDetails|null ;
    userRoles:String[]|null;
    isLoggedIn:Boolean;
    loginToken:string;
    loggedIn : Subject<UserDetails> = new Subject<UserDetails>();
    httpClient:HttpClient;
    constructor(private httpBackend: HttpBackend ,
        private localStorage:LocalStorageService,
        private _snackbar:MatSnackBar
        )
    {
        this.isLoggedIn=false;
        this.httpClient = new HttpClient(httpBackend);
        this.autologin("shah7");
       
        //this.autologin("normal")
    }
    autologin(username:string)
    {
       let loginDetails:LoginUser = new LoginUser(username,"123456")
       this.httpClient.post<loginResponse>(AppConstants.BASE_URL+"auth/generate" , loginDetails)
        .subscribe(
            (body) =>{
                    this.loginToken = `Bearer ${body.token}` ; 
                    this.localStorage.setValue("token" , this.loginToken);
                    this.localStorage.setValue("user",JSON.stringify(body.userDetails));
                    this.userDetails = body.userDetails;
                    this.loggedIn.next(this.userDetails);
                    this.isLoggedIn=true;
                    this.userRoles= body.userDetails.userRole.flatMap((e)=>e.role.role)
                }
                ,
                (error)=>{
                    this.isLoggedIn=false;
                    this._snackbar.open("Unable to sign in","Close",{duration:1000});
                    //Swal.fire("Error","Not defined");
                    //alert("Login PRoblem");
                }
                
                        
        )
    }
    login(loginDetails:LoginUser)
    {   
        this.httpClient.post<loginResponse>(AppConstants.BASE_URL+"auth/generate" , loginDetails)
        .subscribe(
            (body) =>{
                    this.loginToken = `Bearer ${body.token}` ; 
                    this.localStorage.setValue("token" , this.loginToken);
                    this.localStorage.setValue("user",JSON.stringify(body.userDetails));
                    this.userDetails = body.userDetails;
                    this.loggedIn.next(this.userDetails);
                    this.isLoggedIn=true;
                    this.userRoles= body.userDetails.userRole.flatMap((e)=>e.role.role)
                }
                ,
                (error)=>{
                    this.isLoggedIn=false;
                    this._snackbar.open("Unable to sign in","Close",{duration:1000});
                    //Swal.fire("Error","Not defined");
                    //alert("Login PRoblem");
                }
                
                        
        )
    }
    logout()
    {
        this.isLoggedIn=false;
        this.userDetails=null;
        this.loginToken="";
    }


}