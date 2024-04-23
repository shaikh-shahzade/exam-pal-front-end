import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { Result } from "./result.model";

export class QuizAttempt
{
    id:Number;
	date:Date;
	startTime:Time;
	endTime:Time;
	status:string;
	result:Result;
}