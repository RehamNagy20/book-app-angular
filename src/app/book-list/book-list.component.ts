import { Component,OnInit} from '@angular/core';
import type { Book } from './book.model';
import { BookService } from './book.service';
import { Router } from '@angular/router';



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
    
  books!:Book[];
  
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
 onAddBook(book:Book){
  this.bookService.createBook(book);
 }
  
}

