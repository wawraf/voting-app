import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// Addon for UI animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Import modules
import Sidebar from './Sidebar'
import Polls from './Polls'
import MyPolls from './MyPolls'
import SinglePoll from './SinglePoll'
import PrivateRoute from './PrivateRoute'
import Lost from './404'

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={200}
                    transitionName="slide">
                    <WrappedComponent {...props} />
        </ReactCSSTransitionGroup>
    );
    return TransitionedComponent;
};

const Home = ({ isLogged }) => 
(
  <div className='home'>
    <Sidebar isLogged={isLogged} />
    <Switch>
      <Route exact path='/' />
      <Route path='/polls' exact component={TransitionedPage(Polls)} />
      <PrivateRoute isLogged={isLogged} path="/mypolls" component={TransitionedPage(MyPolls)} />
      <Route path="/singlepoll" component={SinglePoll} />
      <Route component={Lost} />
    </Switch>
  </div>
)


export default Home