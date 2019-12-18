import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Hello from './page-hello'

export default class Entry extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/hello" />
          <Route path="/hello" component={Hello} />
        </Switch>
      </Router>
    )
  }
}


ReactDOM.render(<Entry />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
