import { Component,OnInit,ViewChild} from '@angular/core';
import type { Book } from './book.model';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


/**
 * Component to display a list of books.
 * 
 * @component
 */

@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
/**
 * * BookListComponent is responsible for displaying a list of books and handling book creation.
 */
export class BookListComponent implements OnInit {
    

  @ViewChild ('f') signupForm!:NgForm;
  books!:Book[];
  book:Book={
    id: '',
    title: '',
    auther: '',
    genre: '',
    price: '',
    publishedDate: new Date()
  };
  
  submitted=false;
   /**
   * Creates an instance of BookListComponent.
   * 
   * @param {BookService} bookService - The service to manage book data.
   */

  constructor(private bookService:BookService,private router:Router){}

/**
   * Initializes the component and loads the list of books.
   */

 ngOnInit() {
   this.bookService.fetchBooks().subscribe((books: Book[]) => {
      this.books = books;
      
    });
  }
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

