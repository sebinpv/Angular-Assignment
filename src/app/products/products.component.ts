import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './products.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private apiUrl = 'https://dummyjson.com/products';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.getProducts();
    this.filterProductsByCategory('beauty');
  }

  async getProducts(): Promise<void> {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.products = data.products;
      this.updateCategories();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  updateCategories(): void {
    this.categories = [...new Set(this.products.map(product => product.category))];
  }

  filterProductsByCategory(category: string): void {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  buyNow(product: Product): void {
    alert(`Buy Now clicked for:${product.title}`);
  }
}