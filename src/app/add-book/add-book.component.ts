import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  @Output() bookCreated = new EventEmitter();
submitted=false;
book={  
  title:'',
  auther:'',
  genre:'',
  price:0,
  publishedDate:new Date()
}
  @ViewChild ('f') signupForm!:NgForm;

onSubmit(form:NgForm){
  this.submitted=true;
  this.book.title=this.signupForm.value.bookData.title;
  this.book.auther=this.signupForm.value.bookData.auther;
  this.book.genre=this.signupForm.value.bookData.genre;
  this.book.price=this.signupForm.value.bookData.price;
  this.book.publishedDate=new Date(this.signupForm.value.bookData.publishedDate);
  console.log(this.signupForm.value);
  this.signupForm.reset();
  this.bookCreated.emit(this.book);
  }
  
}
