import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/data/books.service';
import { IBook } from 'src/app/interface/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  books: IBook[]= [];
  
  constructor(private _bookService:BooksService) { }

  ngOnInit(): void {
    this._bookService.getList().subscribe(response =>{
      this.books=response.data;
      
    })
  }
}
