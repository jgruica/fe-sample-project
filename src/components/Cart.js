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
        const isEmpty = !this.props.products.length

        const list = this.props.products.map((item, index) => {
            const picturePath = '/images/' + item.filename
            return (
                <li key={index}>
                    <div className='container-close-button'>
                        <i className='fa fa-times close' onClick={() => this.props.removeFromCart(index)}></i>
                    </div>
                    <div className='container-item'>
                        <p className='item-name'>{item.name} </p>
                        <p className='item-price'>{this.formatPrice(item.price)}</p>
                    </div>
                    <div className='container-img'>
                        <div className='img-cart' style={{'backgroundImage': 'url(' + picturePath + ')'}}>&nbsp;</div>
                    </div>
                </li>
            )
        })
        
        return (
            <div className={'container-cart' + (isEmpty ? '-empty' : '')}>
                <div className={'cart' + (isEmpty ? '-empty' : '')}>
                    <h3 className='center'> Your Cart </h3>
                    <div className='cart-list'>
                        {!isEmpty && <ul> {list} </ul>}
                        {isEmpty && <p className='center'>Nothing in your cart, <br /> start shopping.</p>}
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
    }
}

export default Cart