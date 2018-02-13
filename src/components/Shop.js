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
                    <img src={picturePath} alt=""/> <br />
                    {item.name} <br />
                    ${this.calculatePrice(item.price)} <br/>
                    <button onClick={this.props.addToCart}> Add to cart</button>
                </li>
            )
        })
        return (
            <div className="shop">
                Shop our featured collection
            <div className="list">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Shop