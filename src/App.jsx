import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.jsx'
import Item from './Item.jsx'
import { initialItems, initialSellers, reviewers } from './Data.js'
import Details from './Details.jsx'
import Reviewer from './Reviewer.jsx'
let renderAllItems = () => {
  return <div>
    <Link to="/all-sellers">All sellers</Link>
    {initialItems.map(item =>
      (<Item
        itemId={item.id}
        cost={item.price}
        sellerId={item.sellerId}
        imageLocation={item.image}
        description={item.description}
      />))}
  </div>
}
let renderSeller = routerData => {
  let sellerId = routerData.match.params.sid
  let candidates =
    initialSellers.filter(seller => { return seller.id === sellerId })
  return (<Seller seller={candidates[0]} />)
}
let renderDetails = routerData => {
  let idNeeded = routerData.match.params.itemId
  let candidates = initialItems.filter(item => {
    return item.id === idNeeded
  })
  return (<Details item={candidates[0]} />)
}

let renderReviewer = routerData => {
  let idNeeded = routerData.match.params.reviewerId
  let candidates = reviewers.filter(reviewer => {
    return reviewer.id === idNeeded
  })
  return (<Reviewer reviewer={candidates[0]} />)
}

let renderAllSellers = routerData => {
  return initialSellers.map(s => {
    return (<div><Link to={"/seller/" + s.id}>{s.name}</Link></div>)
  })
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/all-sellers' render={renderAllSellers} />
          <Route exact={true} path='/seller/:sid' render={renderSeller} />
          <Route exact={true} path='/details/:itemId' render={renderDetails} />
          <Route exact={true} path='/reviewer/:reviewerId' render={renderReviewer} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App; 