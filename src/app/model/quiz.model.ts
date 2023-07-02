import { Category } from "./category.model"
import { User } from "./user-model.model"

export class Quiz 
{
    qid:Number
    active:Boolean
    description:string
    maxMarks:Number
    maxTime:Number
    noOfQuestions:Number
    title:string
    category:Category
    user:User
    lastDate:Date
    startDate:Date
}