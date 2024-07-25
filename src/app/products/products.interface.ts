// products.interface.ts

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: string;
    images: string[];
    thumbnail: string;
  }
  