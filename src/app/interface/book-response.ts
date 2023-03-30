import { IBook } from "./book";

export interface IBookResponse{
    code:number;
    status: string;
    total:number;
    data:IBook [];
}