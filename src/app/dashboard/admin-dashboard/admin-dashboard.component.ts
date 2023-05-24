import { Component } from '@angular/core';
import { AppConstants } from 'src/app/uitility/constants-helper';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  baseUrl:string=AppConstants.IMAGE_URL;
}
