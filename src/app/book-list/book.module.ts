import { NgModule } from "@angular/core";
import { BookListComponent } from "./book-list.component";
import { RouterLink ,RouterModule} from "@angular/router";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { environment } from "../../environments/environment"; 

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { ShortenPipe } from "../book-detail/shorten.pipe";
import { FormsModule } from "@angular/forms";
import { provideFirebaseApp } from "@angular/fire/app";
import { initializeApp } from "firebase/app";
import { provideFirestore } from "@angular/fire/firestore";
import { getFirestore } from "firebase/firestore";
import { BookService } from "./book.service";

@NgModule({
    declarations:[BookListComponent,BookDetailComponent],
    imports:[BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterLink,
        ShortenPipe],
    providers: [
        provideFirebaseApp(() =>
                 initializeApp(environment.firebaseConfig)),
        provideFirestore(()=>getFirestore()),BookService
    ],

    exports:[BookListComponent,RouterModule]
})
export class BookModule{

}