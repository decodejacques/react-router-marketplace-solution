import React, { Component } from 'react'
import { initialItems } from './Data'
class Cart extends Component {
    render = () => {
        let findItem = itemId => {
            let candidates = initialItems.filter(it => {
                return it.id === itemId
            })
            return candidates[0]
        }
        let cartItems = this.props.items.map(itemId => {
            return findItem(itemId)
        })
        let itemsAsElements = cartItems.map(item => {
            return (<div>
                {item.description}
            </div>)
        })
        return (<div>
            This is what is in your Cart
            <div>
                {itemsAsElements}
            </div>
        </div>)
    }
}
export default Cart