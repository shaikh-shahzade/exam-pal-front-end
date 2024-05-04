import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { Result } from "./result.model";
import { Quiz } from "./quiz.model";
import { User } from "./user-model.model";

export class QuizAttempt
{
    id:Number;
	date:Date;
	startTime:Time;
	endTime:Time;
	status:string;
	result:Result;
	quiz:Quiz;
	user:User;
}