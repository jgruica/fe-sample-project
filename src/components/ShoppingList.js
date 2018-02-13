import React, { Component } from 'react'

class ShoppingList extends Component {

    calculatePrice = (price) => {
        return price / 100;
    }

    render() {
        const list = this.props.products.map((item, index) => {
            const picturePath = '/images/' + item.filename
            return (
                <div className='card' key={index}>
                    <img className='pic' src={picturePath} alt='pic' />
                    <p className='productName'> {item.name} </p>
                    <p className='productPrice'>${this.calculatePrice(item.price)} </p>
                    <p><button className='addToCart' onClick={() => this.props.addToCart(item)}> Add to cart</button></p>
                </div>
            )
        })
        return (
            <div className='shop'>
                <div className='shopText'>
                    Shop our featured collection
                </div>
                <div className='list'>
                    {list}
                </div>
            </div>
        )
    }
}

export default ShoppingList