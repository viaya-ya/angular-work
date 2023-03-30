import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IBookResponse } from '../interface/book-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }
  getList(): Observable<IBookResponse>{
    return this._http.get<IBookResponse>('https://fakerapi.it/api/v1/books?_quantity=10')
  }
}
