import React, { Component } from 'react'

class Cart extends Component {
    calculatePrice = (price) => {
        return price / 100;
    }
    render() {
        const list = this.props.products.map((item, index) => {
            const picturePath = '/images/' + item.filename
            return (
                <li key={index}>
                    <img src={picturePath} alt=""/> 
                    {item.name} <br/>
                    ${this.calculatePrice(item.price)} 
                    <button onClick={() => this.props.removeFromCart(index)}> x </button>
                </li>
            )
        })
        return (
            <div className="cart">
                Your Cart
            <div className="cart-list">
                    <ul>
                        {list}
                    </ul>
                    <hr/>
                    Total
                    <br />
                    <button> BACK </button>
                </div>
            </div>
        )
    }
}

export default Cart