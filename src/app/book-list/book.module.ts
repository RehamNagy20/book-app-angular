import { NgModule } from "@angular/core";
import { BookListComponent } from "./book-list.component";

@NgModule({
    declarations:[BookListComponent],
    exports:[BookListComponent]
})
export class BookModule{

}