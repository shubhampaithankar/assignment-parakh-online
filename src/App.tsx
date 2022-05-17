import React from 'react';
import './App.css';

import Store from './data.json'

function App() {

  let cartArray: any[] = []

  const AddItem = (item: string) => {
    if (cartArray.includes(item)) {
      alert(`You already have the item in your cart`)
    } else {
      cartArray.push(item) 
      alert(`Added ${item} to your cart`)
    }
    console.log(`Current Items in Cart:`, cartArray)
  }

  const RemoveItem = (item: string) => {
    if (!cartArray.includes(item)) {
      alert(`You dont have the item in your cart`)
    } else {
      cartArray = cartArray.filter(i => i !== item)
      alert(`Removed ${item} from your cart`)
    }
    console.log(`Current Items in Cart:`, cartArray)
  }

  return (
    <div className="App row m-0">
      { Store.data.map((section, i) => {
      return (
      <div className='section col-12 px-3' key={i}>
        <h2 className='section-name m-0 pb-1'>{section.name}</h2>
        <div className="d-flex flex-row justify-content-evenly align-items-center h-100">
          { section.productList.map((product, index) => {
          return (
          <div key={index} className='product-box d-flex flex-column justify-content-evenly w-25 h-75 p-3'>
            <h4 className=''>Name: {product.name}</h4>
            <h5 className=''>Price: {product.price}</h5>
            <div className="btn-grp">
              <button className='btn btn-primary mx-2' onClick={() => AddItem(product.name)}>Add to cart</button>
              <button className='btn btn-primary mx-2' onClick={() => RemoveItem(product.name)}>Remove from cart</button>
            </div>
          </div>
          )
          }) }
        </div>
      </div>
      )
      }) }
    </div>
  );
}

export default App;