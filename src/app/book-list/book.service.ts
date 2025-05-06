import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Book } from "./book.model";
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore} from "@angular/fire/firestore";
import { updateDoc } from "firebase/firestore";

@Injectable({providedIn:'root'})
export class BookService{
    private collectionName = 'books';
    constructor(
      private firesotre:Firestore){}
    
    createBook(book:Book):Promise<void>{
        return addDoc(collection(this.firesotre,this.collectionName),book).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          }).catch((error) => {
            console.error("Error adding document: ", error);
          });
    }
    fetchBooks():Observable<Book[]>{
        return collectionData( collection(this.firesotre,this.collectionName), 
        { idField: 'id' }) as Observable<Book[]>;
     
  }
  
    fetchBookById(bookId:string):Observable<Book>{
      return docData(doc(this.firesotre,`${this.collectionName}/${bookId}`)
        , { idField: 'id' }) as Observable<Book>;
  }

  updateBook(bookId:string,book:any):Promise<void>{
    return updateDoc(
      doc(this.firesotre,`${this.collectionName}/${bookId}`)
    ,book);
  }
  deleteBook(bookId:string):Promise<void>{
    return deleteDoc(
      doc(this.firesotre,`${this.collectionName}/${bookId}`)
    );
  }
}
