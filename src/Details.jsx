import React, { Component } from 'react'
class Details extends Component {
    render = () => {
        return (<div>
            <h3>Description</h3>
            {this.props.item.description}
            <h5>Cost</h5>
            {this.props.item.price}
            <h5>Remaining</h5>
            {this.props.item.stock}

        </div>)
    }
}
export default Details