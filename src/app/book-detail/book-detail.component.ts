import { Component, inject, Input} from '@angular/core';
import type { Book } from '../book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-list/book.service';
@Component({
  selector: 'app-book-detail',
  standalone:false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent {
  bookId:any;
  book?:Book;
  // private bookService=inject(BookService);
  constructor(private route:ActivatedRoute,private bookService:BookService){}
  // ngOnInit(){
  //   // this.bookId=this.route.snapshot.paramMap.get('id');
  //   this.route.paramMap.subscribe(
  //     (paramMap) => {
  //             const id = +paramMap.get('id')!; 
  //                  console.log('ID from Route:', id);
  //                   Debugging       this.book = this.bookService.getBooks().find((b) => b.id === id);    });   } 
  //                   Debugging       this.book = this.bookService.getBooks().find((b) => b.id === id);    });   }
  //   // this.book=this.bookService.getBookById(id);
  //   console.log(this.bookId);
  //   console.log(this.book);
  // }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id')!;
      this.book = this.bookService.getBookById(id);
    });
  }
}
