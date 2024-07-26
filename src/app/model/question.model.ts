import { Answer } from "./answer.model";
import { Quiz } from "./quiz.model";

export class Question{
	quesid:Number;
	content:String;
	answers:Answer[];
}