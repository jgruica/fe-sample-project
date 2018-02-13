import React, { Component } from 'react'
import Header from './Header'
import Shop from './Shop'
import Cart from './Cart'
import productsData from '../product-payload.json'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: productsData.products,
            addedToCart: [],
            cardTotal: 0
        };
    }


    onCartClick = () => {
        this.setState(prevState => {
            return {
                isCartVisible: true
            }
        })
    }

    addToCart =() => {

    }

 

    render() {
        return (
            <div className='main' >
                <Header onCartClick={this.onCartClick} cardTotal={this.state.cardTotal} />
                <Shop products={this.state.products} addToCart={this.addToCart} />
                {this.state.isCartVisible && <Cart />}
            </div>
        )
    }
}

export default App;

