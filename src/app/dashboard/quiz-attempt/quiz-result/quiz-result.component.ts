import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { Result } from 'src/app/model/result.model';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements AfterViewInit {

  result:Result;

  constructor(private route:ActivatedRoute , private apiUtility:ApiUtilityService)
  {
    
  }
  ngAfterViewInit(): void {
    const resId = this.route.snapshot.paramMap.get("id");
    if(resId!=null)
    this.apiUtility.getResult(resId).subscribe((res=>{console.log(res)}))
    
  }

  focusReviewSection(reviewQuiz:HTMLDivElement)
  {
    
    setTimeout(()=>{reviewQuiz.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: 'end'
      });} , 100)
  }
}
