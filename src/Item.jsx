import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
class Item extends Component {
  render() {
    return (<div className="card center ">
      <img height="100px" src={this.props.imageLocation} />
      <div>
        <div>description: {this.props.description}</div>
        <div>cost: {this.props.cost}</div>
        <Link to={"/seller/" + this.props.sellerId}> Link to seller </Link>
        <div><Link to={"/details/" + this.props.itemId}>Details</Link></div>
      </div>
    </div>)
  }
}
export default Item; 