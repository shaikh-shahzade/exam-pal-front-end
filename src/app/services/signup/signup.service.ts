import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user-model.model';
import { AppConstants } from 'src/app/uitility/constants-helper';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupCall(user:User , isHostAccount:Boolean)
  {
    //send to backENd
    this.httpClient.post( `${AppConstants.BASE_URL}user` ,user , {params:{isHostAccount:isHostAccount.valueOf()}})
              .subscribe((res)=>{
                console.log(res);
                //this.snack.open("success","close", {duration:2000});
                Swal.fire(
                  'Good job!',
                  'User is Created.',
                  'success'
                )
                .then(()=>this.snack.open("success" , "close" , {duration:2000}));
              })


  }
  constructor(private httpClient:HttpClient , private snack:MatSnackBar) { }
}
