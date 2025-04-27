import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterOutlet } from "@angular/router";

import { BookModule } from "./book-list/book.module";
import { UserModule } from "./user/user.module";
import { BookRoutingModule } from "./book-list/book-routing.module";
import { BookDetailComponent } from "./book-detail/book-detail.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,BookModule,UserModule,RouterOutlet,RouterLink,BookRoutingModule]
})
export class SharedModule{

}
