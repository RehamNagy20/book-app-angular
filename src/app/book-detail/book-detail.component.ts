import { Component, inject, Input} from '@angular/core';
import type { Book } from '../book.model';
@Component({
  selector: 'app-book-detail',
  standalone:false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {
  
  @Input({required:true}) book?:Book;
 
}
