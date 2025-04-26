import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookModule } from "./book-list/book.module";

@NgModule({
    declarations:[AppComponent,BookDetailComponent,HeaderComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,BookModule]
})
export class SharedModule{

}
