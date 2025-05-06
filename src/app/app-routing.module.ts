import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { NgModule } from "@angular/core";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { AuthComponent } from "./auth/auth.component";

const routes:Routes =[
    
    {path:'',component:BookListComponent},
    {path:'book/:id',component:BookDetailComponent},
    {path:'auth',component:AuthComponent},
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