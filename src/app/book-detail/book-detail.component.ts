import { Component} from '@angular/core';
import type { Book } from '../book-list/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';



/**
 * Component to display details of a selected book.
 * 
 * @component
 */

@Component({
  selector: 'app-book-detail',
  standalone:false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {
  bookId:string='';
  book?:Book;  
  constructor(private route:ActivatedRoute,private bookService:BookService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.bookId = paramMap.get('id')!;
    });
    this.bookService.fetchBookById(this.bookId).subscribe((book) => {
      this.book = book;   /////
    });
  }
  onDeleteBook(){
    this.bookService.deleteBook(this.bookId).then(() => {
      console.log("Document deleted successfully!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  onEditBook(book:Book){
     this.bookService.updateBook(this.bookId,book);
  }
 }
