import { Category } from "./category.model"
import { Question } from "./question.model"
import { User } from "./user-model.model"

export class Quiz 
{
    qid:Number
    active:Boolean
    description:string
    maxMarks:Number
    passingMarks:Number;
    maxTime:Number
    noOfQuestions:Number
    title:string
    category:Category
    host:User|null
    lastDate:Date
    startDate:Date
    difficulty:string
    question:Question[]
}