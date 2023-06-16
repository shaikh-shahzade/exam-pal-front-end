import { Category } from "./category.model"
import { User } from "./user-model.model"

export class Quiz 
{
    qid:Number
    active:Boolean
    description:string
    max_marks:Number
    max_time:Number
    no_of_questions:Number
    title:string
    category:Category
    user:User
}