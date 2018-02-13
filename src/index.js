import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Shop from './components/Shop'

class App extends Component {
  render() {
    return (
        <div className='main-page'>
          <Shop />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)