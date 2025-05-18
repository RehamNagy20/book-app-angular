import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
// Update the path below if BookService is located elsewhere, e.g.:
import { BookService } from './book.service';



let component: BookListComponent;
let bookService: BookService;

   beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [BookListComponent],
           providers: [BookService]
       });
       bookService = TestBed.inject(BookService);
       component = TestBed.createComponent(BookListComponent).componentInstance;
   });
   it('should create the component', () => {
       expect(component).toBeTruthy();
   });
   
   it('should handle book selection', () => {
       const book = { id: '1', title: 'Test Book', auther: 'Test Author', genre: 'Test Description', price: '10' ,publishedDate: new Date(2023,1,1) };
       spyOn(component, 'selectedBook').and.callThrough();
       component.selectedBook(book);
       expect(component.selectedBook).toHaveBeenCalledWith(book);
   });
   
   
   

 
   


