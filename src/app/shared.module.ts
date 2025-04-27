import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

import { BookModule } from "./book-list/book.module";
import { UserModule } from "./user/user.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations:[AppComponent,HeaderComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,BookModule,UserModule,RouterOutlet,RouterLink,AppRoutingModule,RouterModule]
})
export class SharedModule{

}