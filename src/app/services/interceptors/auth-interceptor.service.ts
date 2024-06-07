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
    console.log("called");
    if(this.loginService.isLoggedIn)
    {
      
      const newReq  = req.clone
      (
        {
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGFoNyIsImV4cCI6MTcxNzgwMDc3NCwiaWF0IjoxNzE3NzgyNzc0fQ.0GbBAbtdtfH7o4M8aJLcZnVhX--dEL8RQ1gOg0zrbCVGx2L2guWDFaEfpDLOx9zH39Xr6eFCYYqozUChNMV-Lg`,
          },
        }
          );
         console.log(newReq) 
        return next.handle(newReq);
    }
    
    return next.handle(req);

  }
}
