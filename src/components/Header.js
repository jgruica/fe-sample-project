import React, { Component } from 'react'
import Logo from '../images/cart_logo.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="left">
                    <img src={Logo} className="logo" alt="" />
                    <button className="shopBtn"> Shop </button>
                </div>
                <div className="right">
                    <button className="chartBtn" onClick={this.props.onCartClick}> Your Cart </button>
                    <button className="number"> {this.props.cardTotal} </button>
                </div>
            </div>
        )
    }
}

export default Header