import React, { Component } from 'react'
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="right">
                    <button className="chartBtn" onClick={this.props.onCartClick}> Your Cart </button>
                    <button onClick={this.props.onCartClick} className="number"> {this.props.cardTotal} </button>
                </div>
                <div className="left">
                    <i className="fa fa-shopping-cart logo"> </i> <span> Cart.ly  </span> 
                    <button className="shopBtn"> Shop </button>
                </div >
            </div >
        )
    }
}

export default Header