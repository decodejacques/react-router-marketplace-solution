import React, { Component } from 'react'
import { reviews } from './Data.js'
import { Link } from 'react-router-dom'
class Details extends Component {
    addToCart = () => {
        this.props.parent.setState({
            cart: this.props.parent.state.cart.concat(this.props.item.id)
        })
    }
    render = () => {
        let specificReviews = reviews.filter(review => {
            return review.itemId === this.props.item.id
        })
        let reviewReactElements = specificReviews.map(review => {
            return (<div>
                {review.content}
                <Link to={"/reviewer/" + review.reviewerId}>reviewer</Link>
            </div>)
        })
        return (<div>
            <h3>Description</h3>
            {this.props.item.description}
            <h5>Cost</h5>
            {this.props.item.price}
            <h5>Remaining</h5>
            {this.props.item.stock}
            <h5>Reviews</h5>
            {reviewReactElements}
            <button onClick={this.addToCart}>Add to cart</button>


        </div>)
    }
}
export default Details