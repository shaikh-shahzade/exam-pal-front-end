import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveQuizService {

  quiz:Observable<Quiz>;
  constructor() { }
}
