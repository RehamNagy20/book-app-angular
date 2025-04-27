import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-list/book-routing.module';
export const routes: Routes = 
[  {    
        path: 'books',   
        loadChildren: () => 
        import('./book-list/book.module').then(m => m.BookModule), 
    }
    , 
    {    
        path: 'users',    loadChildren: () => import('./user/user.module').then(m => m.UserModule),  
    }, 
    { path: '', redirectTo: '/books', pathMatch: 'full'

    }
    ,
   
]; 

// export const routes: Routes = 
// [  { path: 'books', component: BookListComponent },
//     { path: 'books/:id', component: BookDetailComponent },
//     { path: '', redirectTo: '/books', pathMatch: 'full' }, 
//     { path: '**', redirectTo: '/books' },
   
// ]; 





