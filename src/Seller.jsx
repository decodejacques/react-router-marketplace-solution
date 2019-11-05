import React, { Component } from 'react';
import './App.css';
import { initialItems } from './Data.js'
import { Link } from 'react-router-dom'
class Seller extends Component {
  render() {
    let items = initialItems.filter(item => {
      return item.sellerId === this.props.seller.id
    })
    return (
      <div className="card center">
        <div>{this.props.seller.name}</div>
        <div>{this.props.seller.rating}</div>
        <div>Currently selling:</div>
        {
          items.map(itemOfInterest => {
            return (<div>
              <Link to={"/details/" + itemOfInterest.id}>
                {itemOfInterest.description}
              </Link></div>)
          })
        }
      </div>
    );
  }
}
export default Seller; 