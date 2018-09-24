import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { showSidebar, checkUser } from '../../store/actions'

// Import modules
import Home from './Home'
import Sidebar from './Sidebar'
import Polls from './Polls'
import SinglePoll from './SinglePoll'
import Header from '../presentationals/Header'
import Lost from './Lost'
import Footer from '../presentationals/Footer'

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props
    checkUser()
  }
  
  render() {
    const { isLogged, showSidebar, showSidebarFunc } = this.props

    return (
      <BrowserRouter>
        <div className='App'>
            <Header isLogged={ isLogged } showSidebarFunc={ showSidebarFunc } />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Sidebar} />
              <Route exact path="/polls" component={Polls} />
              <Route exact path="/SinglePoll" component={SinglePoll} />\
              <Route component={Lost} />
            </Switch>
            {showSidebar ? <Sidebar /> : null}
            <Footer />
        </div>
      </BrowserRouter>
    )
  }

} 

const mapStateToProps = (state) => (
  {
    isLogged: state.isLogged,
    showSidebar: state.showSidebar
  }
)

const mapDispatchToProps = (dispatch) => (
  { 
    showSidebarFunc: () => dispatch(showSidebar()),
    checkUser: () => dispatch(checkUser())
  }
)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App