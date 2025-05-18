import { TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from '../book-list/book.service';
describe('BookDetailComponent', () => {
 
let component: BookDetailComponent;
let fixture: BookDetailComponent;
let bookService: BookService;

let bookId="10";

beforeEach(() => {
    bookId = "1"; // Initialize bookId with a test value
    TestBed.configureTestingModule({
        declarations: [BookDetailComponent],
        providers: [BookService]
    });
    bookService = TestBed.inject(BookService);
    component = TestBed.createComponent(BookDetailComponent).componentInstance;
})
it('should create the component', () => {
    expect(component).toBeTruthy();

    component.ngOnInit();
    expect(component.book).toBeDefined();
    expect(component.book?.id).toBe(bookId);
    expect(component.book?.title).toBe('Test Book');
});
})
