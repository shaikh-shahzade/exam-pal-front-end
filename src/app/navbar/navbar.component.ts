import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserDetails } from '../model/UserDetails';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppConstants } from '../uitility/constants-helper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  { 

  userLogin!:boolean; //:Subject<boolean> = new Subject<boolean>();
  userDetails!: UserDetails;
  userRoles:String[]|null;
  profilePath:string=`/user${ this.userDetails!=undefined&& this.userDetails.userRole.find(e=>e.role.role==="admin-user")!=undefined?"/admin":""}`;


  baseUrl:string = AppConstants.IMAGE_URL;
  constructor(private loginService:LoginService
    )
  {
    this.loginService.loggedIn.subscribe( (userDetails)=>{
      this.userLogin=true;
      this.userDetails=userDetails;
      loginService.userRoles=userDetails.userRole.flatMap(r=>r.role.role);
      this.userRoles=loginService.userRoles;
      console.log(this.userRoles)
      console.log(userDetails); 
      this.profilePath=`/user${this.userDetails.userRole.find(e=>e.role.role==="admin-user")!=undefined?"/admin":""}`;

    }); 
    // setInterval(()=>{console.log(this.userLogin  +""+ this.loginService.userDetails.username)},2000)
  }
  ngOnInit()
  {
  

  }
  logout()
  {
      this.loginService.logout();
      console.log("Called")
  }
  
}
