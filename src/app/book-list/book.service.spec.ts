import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { Firestore } from '@angular/fire/firestore';
import { Book } from './book.model';
describe('BookService', () => {
    let service: BookService;
    let firestore: Firestore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BookService, Firestore]
        });
        service = TestBed.inject(BookService);
        firestore = TestBed.inject(Firestore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should create a book', async () => {
        const book: Book = { title: 'Test Book', auther: 'Test Author', genre: 'Test Description',price: '10' ,publishedDate: new Date(2023,1,1) };
        const result = await service.createBook(book);
        expect(result).toBeUndefined(); // Adjust based on your implementation
    });

    it('should fetch books', (done) => {
        service.fetchBooks().subscribe((books) => {
            expect(books).toBeInstanceOf(Array);
            done();
        });
    });

    it('should fetch a book by ID', (done) => {
        const bookId = 'testId';
        service.fetchBookById(bookId).subscribe((book) => {
            expect(book).toBeDefined();
            done();
        });
    });

    it('should update a book', async () => {
        const bookId = 'testId';
        const updatedBook = { title: 'Updated Title' };
        const result = await service.updateBook(bookId, updatedBook);
        expect(result).toBeUndefined(); // Adjust based on your implementation
    });

    it('should delete a book', async () => {
        const bookId = 'testId';
        const result = await service.deleteBook(bookId);
        expect(result).toBeUndefined(); // Adjust based on your implementation
    });
})
