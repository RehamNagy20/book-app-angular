import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class BookService{
    private book_list=[
        {
          id: "1",
          title: "The Midnight Library",
          author: "Matt Haig",
          genre: "Fiction",
          price: "14.99$",
          publishedYear: "2020",
        },
        {
          id: "2",
          title: "Atomic Habits",
          author: "James Clear",
          genre: "Self-Help",
          price: "18.5$",
          publishedYear: "2018",
        },
        {
          id: "3",
          title: "Educated",
          author: "Tara Westover",
          genre: "Memoir",
          price: "16.0$",
          publishedYear: "2018",
        },
        {
          id: "4",
          title: "Dune",
          author: "Frank Herbert",
          genre: "Science Fiction",
          price: "12.75$",
          publishedYear: "1965",
        },
        {
          id: "5",
          title: "Becoming",
          author: "Michelle Obama",
          genre: "Biography",
          price: "20.0$",
          publishedYear: "2018",
        }
    ]
    getBooks(){
        return this.book_list;
    }
    getBookById(bookId:string){
        return this.book_list.find((book)=> book.id ===bookId);
    }
    
}
