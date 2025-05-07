import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { BookListComponent } from "./book-list.component";

const routes: Routes = 
[ 
    {path: '', component: BookListComponent }, 
    { path:'book/:id', component: BookDetailComponent }
        ,
    ];
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
    export class BookRoutingModule {}
