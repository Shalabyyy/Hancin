import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './HomePage'   
class Body extends Component {
  render () {
    return (
    <div>
    
    <Route exact path='/' component={Homepage}/>
    </div>
    )
  }
}

export default Body