import { Component } from '@angular/core';
import { LoginUser } from '../Models/login-model.model';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDetails:LoginUser = new LoginUser("","") ;

  submitLogin()
  {
      //console.log(this.loginDetails)
      this.loginService.login(this.loginDetails);
  }

  constructor(private loginService:LoginService)
  {}

}
