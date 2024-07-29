import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './products.interface';
import { Output, EventEmitter } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  private apiUrl = 'https://dummyjson.com/products';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];

  constructor(private router: Router) { }

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

  @Output() addToCartEvent = new EventEmitter<string>();
  @Output() deleteFromCartEvent = new EventEmitter<string>();

  addToCart(value: Product) {
    this.addToCartEvent.emit(value.title);
    alert(`Added to cart for:${value.title}`);
  }
  deleteFromCart(value: Product) {
    this.deleteFromCartEvent.emit(value.title);
    alert(`Delete clicked for:${value.title}`);
  }

  buyNow(product: Product): void {
    alert(`Buy Now clicked for:${product.title}`);
  }

  addToWishlist(product: Product): void {
    alert(`Add to wishlist clicked for:${product.title}`);
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}