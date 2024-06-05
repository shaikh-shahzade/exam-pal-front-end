import { AttemptedQuestion } from "./attempted-question.model";
import { Quiz } from "./quiz.model";

export class Result
{
    resId:Number;
	marks:Number;
	totalAttempted:Number;
	correctAnswers:Number;
	timeTaken:Number;
	attemptedQuestion:AttemptedQuestion[];
   
}