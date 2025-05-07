import { Component, ViewChild} from '@angular/core';
import type { Book } from '../book-list/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';
import { NgForm } from '@angular/forms';
import { docData } from '@angular/fire/firestore';
@Component({
  selector: 'app-book-detail',
  standalone:false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {
  bookId:any;
  book?:Book;
  @ViewChild ('f') signupForm!:NgForm;
  book1={
    title:'',
    auther:'',
    genre:'',
    price:'',
    publishedDate:new Date()
  }
  submitted=false;
  
  constructor(private route:ActivatedRoute,private bookService:BookService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.bookId = paramMap.get('id')!;
    });
    this.bookService.fetchBookById(this.bookId).subscribe((book) => {
      this.book = book;   
    });
  }
  onDeleteBook(){
    this.bookService.deleteBook(this.bookId).then(() => {
      console.log("Document deleted successfully!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  onSubmit(form:NgForm){
    this.submitted=true;
    this.book1.title=this.signupForm.value.bookData.title;
    this.book1.auther=this.signupForm.value.bookData.auther;
    this.book1.genre=this.signupForm.value.bookData.genre;
    this.book1.price=this.signupForm.value.bookData.price;
    this.book1.publishedDate=new Date(this.signupForm.value.bookData.publishedDate);
    console.log(this.signupForm.value);
    this.signupForm.reset();
    this.bookService.updateBook(this.bookId,this.book1);
    }
}
