import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  experince:number
   constructor() {
    let date = new Date( Date.now()).getFullYear()  - new Date( "01/01/2022") .getFullYear();
    
    
    this.experince =  date;
   }
}
