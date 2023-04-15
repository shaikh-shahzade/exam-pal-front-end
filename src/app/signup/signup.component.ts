import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user-model.model';
import { SignupService } from '../services/signup/signup.service';
import { MatSnackBar, MatSnackBarLabel } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


    userModel: User;

    constructor(private signup:SignupService , private _snackBar:MatSnackBar)
    {
      this.userModel=new User();
    }
    submitForm(myForm:NgForm)
    {
      
      if(myForm.valid)
        {
          this.userModel=myForm.value;
          this.signup.signupCall(this.userModel);
        }
        else{
          this._snackBar.open("Fields required" , "Close" , {duration:200000  ,panelClass:['snack-bar-green']} );
        }
    }

}
