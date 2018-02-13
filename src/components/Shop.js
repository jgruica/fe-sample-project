import React, { Component } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import Cart from './Cart'
import productsData from '../product-payload.json'

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: productsData.products,
            addedToCart: [],
        };
    }


    onCartClick = () => {
        this.setState(prevState => {
            return {
                isCartVisible: true
            }
        })
    }

    addToCart = (product) => {
        this.setState(prevState => {
            return {
                addedToCart: prevState.addedToCart.concat([product]),
            }
        })
    }

    removeFromCart = (index) => {
        let currentCart = this.state.addedToCart.slice();
        currentCart.splice(index, 1)
        this.setState((prevState, props) => {
            return {
                addedToCart: currentCart
            }
        })
    }

    clickBack = () => {
        this.setState(prevState => {
            return {
                isCartVisible: false
            }
        })
    }


    render() {
        return (
            <div className='main' >
                <Header onCartClick={this.onCartClick} cardTotal={this.state.addedToCart.length} />
                <ShoppingList products={this.state.products} addToCart={this.addToCart} />
                
                {this.state.isCartVisible && 
                <Cart products={this.state.addedToCart} removeFromCart={this.removeFromCart} clickBack={this.clickBack} />}
            </div>
        )
    }
}

export default Shop;

