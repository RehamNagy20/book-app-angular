import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

import { UserModule } from "./user/user.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "./auth/auth.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
@NgModule({
    declarations:[AppComponent,HeaderComponent,AuthComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        UserModule,
        RouterOutlet,RouterLink,
        AppRoutingModule,RouterModule]
})
export class SharedModule{

}