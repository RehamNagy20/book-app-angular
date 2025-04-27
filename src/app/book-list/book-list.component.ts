import { Component,Input,Output,EventEmitter, output } from '@angular/core';
import type { Book } from '../book.model';
import { BookService } from './book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

books!:Book[];
 constructor(private bookService:BookService,private router:Router){
  this.books=bookService.getBooks();
 }
 selectedBook(book:Book){
  this.router.navigate(['/',book.id]);
 }
}

