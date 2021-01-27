import { makeAutoObservable } from 'mobx';

class Loader {
  isVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}

export const loaderStore = new Loader();
