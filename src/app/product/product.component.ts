import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cart: any;
  public fileUrl;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();

  }
  getCart(): void {
    this.cart = this.cartService.getCart();
  }

  addToCart(): void {
    this.cart = this.cartService.addToCart();
  }

  emptyCart(): void {
    // clear message
    this.cartService.clearCart();
    this.getCart();
  }
}
