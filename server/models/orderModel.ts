import mongoose,{Document, Model, Schema} from "mongoose";


export interface IOrder extends Document{
    courseId:string;
    userId:string;
    payment_info:object;
}

const OrderSchema:Schema = new Schema({
    
});
