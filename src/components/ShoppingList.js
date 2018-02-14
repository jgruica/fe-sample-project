import React, { Component } from 'react'

class ShoppingList extends Component {

    calculatePrice = (price) => {
        return price / 100;
    }

    render() {
        const list = this.props.products.map((item, index) => {
            const picturePath = '/images/' + item.filename
            return (
                <div className='container-card' key={index}>
                    <img className='card-pic' src={picturePath} alt='card-pic' />
                    <p className='product-name'> {item.name} </p>
                    <p className='product-price'>${this.calculatePrice(item.price)} </p>
                    <p><button className='addToCart' onClick={() => this.props.addToCart(item)}> Add to cart</button></p>
                </div>
            )
        })

        return (
            <div className={'container-shop' + (this.props.isCartVisible ? ' blur' : '')}>
                <div className='shop-text'>
                    Shop our featured collection
                </div>
                <div className='shop-list'>
                    {list}
                </div>
            </div>
        )
    }
}

export default ShoppingList