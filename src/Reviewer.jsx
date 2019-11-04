import React, { Component } from 'react'
import { reviews } from './Data.js'
class Reviewer extends Component {
    render = () => {
        let authored = reviews.filter(review => {
            return review.reviewerId === this.props.reviewer.id
        })
        // Usually we return a single react element
        // but it is ok to return an array of react elements
        return authored.map(review => {
            return (<div>{review.content}</div>)
        })
    }
}
export default Reviewer