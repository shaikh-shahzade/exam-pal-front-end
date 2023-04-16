import { Component } from '@angular/core';
import { LoginUser } from '../Models/login-model.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDetails:LoginUser = new LoginUser("","") ;

  submitLogin()
  {
      console.log(this.loginDetails)
  }

}
