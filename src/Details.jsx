import React, { Component } from 'react'
import { reviews } from './Data.js'
class Details extends Component {
    render = () => {
        let specificReviews = reviews.filter(review => {
            return review.itemId === this.props.item.id
        })
        let reviewReactElements = specificReviews.map(review => {
            return (<div>{review.content}</div>)
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
        </div>)
    }
}
export default Details