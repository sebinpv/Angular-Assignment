import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { MinuteComponent } from './minute/minute.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,CommonModule,MinuteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title="abcd"
  products: string[] = [];

  addItem(newItem: string) {
    this.products.push(newItem);
  }
  deleteItem(newItem: string) {
    const index = this.products.indexOf(newItem);

if (index !== -1) {
  // Remove the element at the found index
  this.products.splice(index, 1);
}
  }
}
