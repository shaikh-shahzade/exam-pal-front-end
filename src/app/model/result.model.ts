import { AttemptedQuestion } from "./attempted-question.model";

export class Result
{
    resId:Number;
	marks:Number;
	totalAttempted:Number;
	correctAnswers:Number;
	timeTaken:Number;
	attemptedQuestion:AttemptedQuestion[];
}