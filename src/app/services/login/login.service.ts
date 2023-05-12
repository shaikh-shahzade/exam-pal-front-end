import { Injectable } from "@angular/core";
import { LoginUser } from "src/app/Models/login-model.model";

@Injectable()
export class LoginService
{
    login(loginDetails:LoginUser)
    {   
        console.log(loginDetails)
        
    }
}