import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: IBook
  isVisible= false;
}
