import { Component,Input,inject } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-app';
}
