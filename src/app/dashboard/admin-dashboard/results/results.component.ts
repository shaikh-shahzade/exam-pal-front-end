import { AfterViewInit, Component } from '@angular/core';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements AfterViewInit{
  constructor(private apiService:ApiUtilityService)
  {}
  ngAfterViewInit(): void {
    
  }

}
