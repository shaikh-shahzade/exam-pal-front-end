import { Answer } from "./answer.model";
import { Question } from "./question.model";

export class AttemptedQuestion
{
    id:Number;
    isCorrect:Boolean;
    question:Question;
    answer:Answer;
}