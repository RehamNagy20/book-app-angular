import { NgModule } from "@angular/core";
import { BookListComponent } from "./book-list.component";
import { RouterLink ,RouterModule} from "@angular/router";
import { BookDetailComponent } from "../book-detail/book-detail.component";
// import { BookRoutingModule } from "./book-routing.module";
// import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations:[BookListComponent,BookDetailComponent],
    imports:[RouterLink],
    exports:[BookListComponent,RouterModule]
})
export class BookModule{

}