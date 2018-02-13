import React, { Component } from 'react'

class Shop extends Component {

    calculatePrice = (price) => {
        return price / 100;
    }

    render() {
        const list = this.props.products.map((item, index) => {
            const picturePath = '/images/' + item.filename
            return (
                <li key={index}>
                    <img className='img' src={picturePath} alt='pic' /> <br />
                    {item.name} <br />
                    ${this.calculatePrice(item.price)} <br />
                    <button onClick={() => this.props.addToCart(item)}> Add to cart</button>
                </li>
            )
        })
        return (
            <div className='shop'>
                <div className='shopText'>
                    Shop our featured collection
                </div>
                <div className='list'>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Shop