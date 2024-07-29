import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/products.interface';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule,NgOptimizedImage], // Add HttpClientModule here
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  productId: number | undefined;
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.fetchProductDetails(this.productId);
    }
  }

  async fetchProductDetails(id: number) {
    try {
      const response = await this.http.get<any>(`https://dummyjson.com/products/${id}`).toPromise();
      // this.http.get(`https://dummyjson.com/products/${id}`).subscribe((data:any)=>{
      //   this.product = data;
      // })
      this.product = response; // Use the response directly
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
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
}
function data(value: Object): void {
  throw new Error('Function not implemented.');
}

