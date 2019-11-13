import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ws: WebSocket;

  constructor() { }

  public count = 0;
  addToCart() {
    this.count = this.count + 1;
    return this.count;
  }

  clearCart() {
    return this.count = 0;
  }

  getCart() {
    return this.count;
  }


  createwebSocket(url: string): Observable<string> {
    this.ws = new WebSocket(url);
    return new Observable(observer => {
      this.ws.onerror = (event) => observer.error(event);
      this.ws.onmessage = (event) => observer.complete();

      this.ws.onopen = (event) => {

        if (this.ws.readyState === 1) {

        }
        this.ws.onmessage = (event) => {
          observer.next(event.data);
        };
      };

    });
  }

  closeWebSocket(){
    this.ws.close();
  }

  sendMessages(message) {
    if (this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(message));
    }
  }
}
