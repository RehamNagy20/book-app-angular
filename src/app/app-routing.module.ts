import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { NgModule } from "@angular/core";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const routes:Routes =[
    {path:'',component:BookListComponent},
    {path:'book/:id',component:BookDetailComponent},
    {   
        path: 'users',    
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),  
    },
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}