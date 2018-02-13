import React, { Component } from 'react'

class Cart extends Component {

    formatPrice = (price) => {
        return '$' + price / 100;
    }

    calculateTotalPrice = () => {
        let sum = 0;
        this.props.products.forEach(item => {
            sum += item.price
        })
        return sum
    }
    render() {
        if (this.props.products.length > 0) {
            const list = this.props.products.map((item, index) => {
                const picturePath = '/images/' + item.filename
                return (
                    <li key={index}>
                        <img src={picturePath} alt="" />
                        {item.name} <br />
                        {this.formatPrice(item.price)}
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
                        <hr />
                        Total {this.formatPrice(this.calculateTotalPrice())}
                        <br />
                        <button onClick={this.props.clickBack}> BACK </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="empty-cart">
                    <h2> Your Cart </h2>
                    Nothing in your cart, <br/> start shopping.
                    <hr />
                    Total {this.formatPrice(this.calculateTotalPrice())}
                    <br />
                    <button onClick={this.props.clickBack}> BACK </button>
                </div>
            )

        }
    }
}

export default Cart