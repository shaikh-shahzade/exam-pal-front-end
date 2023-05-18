import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserDetails } from '../model/UserDetails';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  { 

  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();

  userLogin!:boolean; //:Subject<boolean> = new Subject<boolean>();
  userDetails!: UserDetails;
  constructor(private loginService:LoginService)
  {
    this.loginService.loggedIn.subscribe( (userDetails)=>{
      this.userLogin=true;
      this.userDetails=userDetails;
      
    }); 
    // setInterval(()=>{console.log(this.userLogin  +""+ this.loginService.userDetails.username)},2000)
  }
  ngOnInit()
  {
  

  }
  
}
