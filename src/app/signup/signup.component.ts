import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user-model.model';
import { SignupService } from '../services/signup/signup.service';
import { MatSnackBar, MatSnackBarLabel } from '@angular/material/snack-bar';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


    userModel: User;
    isHostAccount:BooleanInput = false;
    constructor(private signup:SignupService , private _snackBar:MatSnackBar)
    {
      this.userModel=new User();
    }
    print()
    {
      this.isHostAccount=!this.isHostAccount;
      alert(this.isHostAccount)
    }
    submitForm(myForm:NgForm)
    {
      
      if(myForm.valid)
        {
          this.userModel=myForm.value;
          
          this.signup.signupCall(this.userModel,this.isHostAccount?.valueOf()===true);
        }
        else{
          this._snackBar.open("Fields required" , "Close" , {duration:2000  ,panelClass:['snack-bar-green']} );
        }
    }

}
