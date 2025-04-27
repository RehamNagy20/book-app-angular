import { Routes } from "@angular/router";
import { BookListComponent } from "./book-list.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
const routes: Routes =
 [ 
    { path: '', component: BookListComponent },  
    { path: ':id', component: BookDetailComponent },
];
@NgModule({  
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule],
})
export class BookRoutingModule {}
