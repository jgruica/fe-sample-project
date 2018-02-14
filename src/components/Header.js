import React, { Component } from 'react'
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Header extends Component {
    render() {
        return (
            <div className='container-header'>
                <div className='right-header'>
                    <button className={'chart-button' + (this.props.isCartVisible ? ' active' : '')} onClick={this.props.onCartClick}> Your Cart </button>
                    <button onClick={this.props.onCartClick} className='number-button'> {this.props.cardTotal} </button>
                </div>
                <div className='left-header'>
                    <i className='fa fa-shopping-cart logo'> </i> <span> Cart.ly  </span> 
                    <button className={'shop-button' + (!this.props.isCartVisible ? ' active' : '')} onClick={this.props.onShopClick}> Shop </button>
                </div >
            </div >
        )
    }
}

export default Header