import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { showLoginBar, checkUser } from '../../store/actions'

// Addon for UI animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Import modules
import Header from '../presentationals/Header'
import Home from './Home'
import LoginBar from './LoginBar'
import Footer from '../presentationals/Footer'

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props
    checkUser()
  }
  
  render() {
    const { isLogged, showLoginBar, showLoginBarFunc } = this.props

    return (
      <BrowserRouter>
        <div className='App'>
            <Header isLogged={ isLogged } showLoginBarFunc={ showLoginBarFunc } />
            <Home isLogged={isLogged} />
            <ReactCSSTransitionGroup
                  transitionName="login"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
              {showLoginBar ? <LoginBar key='loginBar' showLoginBarFunc={ showLoginBarFunc } /> : null}
            </ReactCSSTransitionGroup>
            <Footer />
        </div>
      </BrowserRouter>
    )
  }

} 

const mapStateToProps = (state) => (
  {
    isLogged: state.isLogged,
    showLoginBar: state.showLoginBar
  }
)

const mapDispatchToProps = (dispatch) => (
  { 
    showLoginBarFunc: () => dispatch(showLoginBar()),
    checkUser: () => dispatch(checkUser())
  }
)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App