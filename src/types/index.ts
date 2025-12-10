export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  fabric: string;
  color: string;
  pattern: string;
  inStock: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewCount: number;
  description?: string;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Coupon {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  description: string;
  minOrder?: number;
}

export interface Customer {
  name: string;
  mobile: string;
  address: string;
  pincode: string;
  landmark?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: Customer;
  total: number;
  discount: number;
  shipping: number;
  paymentMethod: 'upi' | 'cod' | 'phonePe' | 'googlePay' | 'paytm';
  status: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
}
