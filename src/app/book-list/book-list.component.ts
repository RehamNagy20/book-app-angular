import { Component,ViewChild} from '@angular/core';
import type { Book } from './book.model';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
    ngOnInit() {
        throw new Error('Method not implemented.');
    }

  @ViewChild ('f') signupForm!:NgForm;
  books!:Book[];
  constructor(private bookService:BookService
    ,private router:Router
    
    ){
    this.bookService.fetchBooks().subscribe((books: Book[]) => {
      this.books = books;
      
    });
    
   
  }
 
  book={
    title:'',
    auther:'',
    genre:'',
    price:'',
    publishedDate:new Date()
  }
  submitted=false;
  


 selectedBook(book:Book){
  this.router.navigate(['/book',book.id]);
 }
 onSubmit(form:NgForm){
  this.submitted=true;
  this.book.title=this.signupForm.value.bookData.title;
  this.book.auther=this.signupForm.value.bookData.auther;
  this.book.genre=this.signupForm.value.bookData.genre;
  this.book.price=this.signupForm.value.bookData.price;
  this.book.publishedDate=new Date(this.signupForm.value.bookData.publishedDate);
  console.log(this.signupForm.value);
  this.signupForm.reset();
  this.bookService.createBook(this.book);
  }
  
}

