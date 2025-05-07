import { NgModule } from "@angular/core";
import { BookListComponent } from "./book-list.component";
import { RouterLink ,RouterModule} from "@angular/router";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { environment } from "../../environments/environment"; 

import { ShortenPipe } from "../book-detail/shorten.pipe";
import { FormsModule } from "@angular/forms";
import { provideFirebaseApp } from "@angular/fire/app";
import { initializeApp } from "firebase/app";
import { provideFirestore } from "@angular/fire/firestore";
import { getFirestore } from "firebase/firestore";
import { BookService } from "./book.service";
import { CommonModule } from "@angular/common";
import { BookRoutingModule } from "./book-routing.module";

@NgModule({
    declarations:[BookListComponent,BookDetailComponent],
    imports:[CommonModule,
        FormsModule,
        RouterLink,
        ShortenPipe,BookRoutingModule],
    providers: [
        provideFirebaseApp(() =>
            initializeApp(environment.firebaseConfig)),
        provideFirestore(()=>
            getFirestore()),
        BookService
    ],

    exports:[BookListComponent,RouterModule]
})
export class BookModule{

}