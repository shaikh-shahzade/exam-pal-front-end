import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isAdmin:boolean;
  constructor(private route:ActivatedRoute)
  {
      console.log(this.route.snapshot)
  }
}
