import {observable, computed} from 'mobx';

class Store {
  @observable products = [
      {"name": "Weasel", "price": 70.75},
      {"name": "Dog", "price": 59.99},
      {"name": "Cat", "price": 39.99},
      {"name": "Squirrel", "price": 20.47},
      {"name": "Badger", "price": 72.50},
      {"name": "Hedgehog", "price": 32.99},
      {"name": "Otter", "price": 45.77},
      {"name": "Beaver", "price": 92.20},
      {"name": "Lynx", "price": 120.00}
  ];
  @observable basket = [];
  @computed get total() {
    return this.basket.reduce((acc, item) => {
        return acc + (Number(item.price) * Number(item.amount));
    }, 0);
  }
  addToCart({name, price}, amount = 1) {
      for(const item of this.basket) {
          if(item.name === name) {
              item.amount = Number(item.amount) + Number(amount);
              return;
          }
      }
      this.basket.push({name, price, amount});
  }
  removeFromCart({name}, amount) {
      for(const item of this.basket) {
          if(item.name === name) {
              item.amount -= amount;
          }
      }
      this.basket = this.basket.filter(item => item.amount >= 1);
  }
  }

const store = new Store();

export default store;
