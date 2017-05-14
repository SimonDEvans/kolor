import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ColourGrid from './components/ColourGrid/ColourGrid'
import NotFound from './components/NotFound/NotFound'
import './css/App.css'

const Container = (props) => props.children

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
          
            // Main routes
            <IndexRoute component={ColourGrid} />

            // 404
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;