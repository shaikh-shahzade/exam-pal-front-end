import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserDetails } from '../model/UserDetails';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppConstants } from '../uitility/constants-helper';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  { 

  userLogin!:boolean; //:Subject<boolean> = new Subject<boolean>();
  userDetails!: UserDetails;
  baseUrl:string = AppConstants.IMAGE_URL;
  constructor(private loginService:LoginService)
  {
    this.loginService.loggedIn.subscribe( (userDetails)=>{
      this.userLogin=true;
      this.userDetails=userDetails;
      console.log(userDetails);
    }); 
    // setInterval(()=>{console.log(this.userLogin  +""+ this.loginService.userDetails.username)},2000)
  }
  ngOnInit()
  {
  

  }
  
}
