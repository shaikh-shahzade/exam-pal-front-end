import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.loginService.isLoggedIn)
    {
      
      const newReq  = req.clone
      (
        {
         headers: req.headers.append("Authorization" , this.loginService.loginToken)
        }
          );
          console.log("Calling again")
        console.log(newReq);
        return next.handle(newReq);
    }
    
    return next.handle(req);

  }
}
