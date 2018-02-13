import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render() {
    return (
        <div className='main-page'>
          <ShoppingList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)