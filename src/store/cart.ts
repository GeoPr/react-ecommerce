import { makeAutoObservable } from 'mobx';

export interface IProduct {
  id: number;
  img: string;
  t: string;
  tt: string;
  price: number;
  count: number;
}

class Cart {
  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(product: IProduct) {
    const candidate = this.getCandidate(product.id);

    candidate ? ++candidate.count : this.products.push(product);
  }

  delete(productId: number) {
    const candidate = this.getCandidate(productId);

    if (candidate!.count > 1) {
      --candidate!.count;
    } else {
      this.products = this.products.filter(({ id }) => id !== productId);
    }
  }

  reset() {
    this.products = [];
  }

  getCandidate(productId: number) {
    return this.products.find(({ id }) => id === productId);
  }
}

export const cartStore = new Cart();
