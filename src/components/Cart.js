import React, { Component } from 'react'
import '../font-awesome-4.7.0/css/font-awesome.min.css';

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
                        <div className='removeDiv'>
                            <i className='fa fa-times close' onClick={() => this.props.removeFromCart(index)}></i>
                            {/* <button className='remove' onClick={() => this.props.removeFromCart(index)}> x </button> */}
                        </div>
                        <div className='items'>
                            <p className='text'>{item.name} </p>
                            <p className='price'>{this.formatPrice(item.price)}</p>
                        </div>
                        <div className='imgDiv'>
                            <img className='cartImg' src={picturePath} alt='pic' />
                        </div>
                    </li>
                )
            })
            return (
                <div className='container-cart'>
                    <div className='cart'>
                        <h3 className='center'> Your Cart </h3>
                        <div className='cart-list'>
                            <ul>
                                {list}
                            </ul>
                            <hr />
                            <div>
                                <div className='totalPrice'>{this.formatPrice(this.calculateTotalPrice())}</div>
                                <div className='total'> Total </div>
                            </div>
                            <div className='center'>
                                <button className='back' onClick={this.props.clickBack}> Back </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container-empty-cart'>
                    <div className='cart-empty'>
                        <h3 className='center'> Your Cart </h3>
                        <p className='center'>Nothing in your cart, <br /> start shopping.</p>
                        <hr />
                        <div>
                            <div className='totalPrice'>{this.formatPrice(this.calculateTotalPrice())}</div>
                            <div className='total'> Total </div>
                        </div>
                        <div className='center'>
                            <button className='back' onClick={this.props.clickBack}> Back </button>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default Cart