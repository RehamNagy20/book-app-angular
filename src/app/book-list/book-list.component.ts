import { Component,Input,Output,EventEmitter, output } from '@angular/core';
import type { Book } from '../book.model';
import { BookService } from './book.service';
@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  @Output() book=new EventEmitter<Book>();
books!:Book[];
 constructor(private bookService:BookService){
  this.books=bookService.getBooks();
 }
 selectedBook(book:Book){
  this.book.emit(book);
 }
}

