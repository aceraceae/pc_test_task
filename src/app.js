import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import store from './store';
import ProductItem from './components/product-item';
import BasketItem from './components/basket-item';
import Header from './components/header';

@observer
export default class App extends Component {
    constructor() {
        super();
        this.state = { basket: [], totalPrice: 0};
    }

    addToBasket(item, e) {
        let amount = 1;
        if(e.target.amount) {
          e.preventDefault();
          amount = e.target.amount.value;
          e.target.amount.value = 1;
        }
        this.props.store.addToCart(item, amount);
    }

    removeFromBasket(item, amount) {
        if(!amount) { amount = item.amount }
        this.props.store.removeFromCart(item, amount);
    }

    render() {
        const {products, basket, total} = this.props.store;
        return (
            <div className="wrapper">
              <div className="product-list">
                <Header type="product" />
                {products.map(item => <ProductItem
                  key={item.name}
                  className="product-item"
                  add={this.addToBasket.bind(this, item)}
                  {...item}/>)}
              </div>
              <div className="basket">
                <div className="basket-list">
                  <Header type="basket" />
                  {basket.length > 0 ? basket.map(item => <BasketItem
                    key={item.name}
                    add={this.addToBasket.bind(this, item)}
                    remove={this.removeFromBasket.bind(this, item)}
                    {...item} />) : <div className="basket-info">basket is empty</div>}
                </div>
                <div className="basket-total">
                  Total <div className="basket-total-price">{total.toFixed(2)}</div>
                </div>
              </div>
            </div>);
    }
}

ReactDOM.render(<App store={store}/>, document.querySelector('#container'));
