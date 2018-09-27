import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Addon for UI animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Import modules
import Sidebar from './Sidebar'
import Polls from './Polls'
import MyPolls from './MyPolls'
import SinglePoll from './SinglePoll'
import PrivateRoute from './PrivateRoute'
import Lost from './404'

// const TransitionedPage = (WrappedComponent) => {
//   console.log(WrappedComponent)
//     const TransitionedComponent = (props) => (
//         <ReactCSSTransitionGroup
//                     transitionAppear={true}
//                     transitionAppearTimeout={700}
//                     transitionEnterTimeout={700}
//                     transitionLeaveTimeout={200}
//                     transitionName="slide">
//                     <WrappedComponent {...props} />
//         </ReactCSSTransitionGroup>
//     );
//     return TransitionedComponent;
// };

class Trans extends Component {
  render() {
    const { Wrapper, isLogged } = this.props
    
    if (isLogged == false) return <Redirect push to='/' />
    
    return (
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionLeave={false}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionName="slide">
          <Wrapper key={this.props.location.pathname} {...this.props} />
        </ReactCSSTransitionGroup>
    );
  }
};

const Home = ({ isLogged }) => 
(
  <div className='home'>
    <Sidebar isLogged={isLogged} />
    <Switch>
      <Route exact path='/' />
      <Route path='/polls' exact render={(props) => <Polls />} />
      <Route path="/mypolls" render={(props) => <Trans Wrapper={MyPolls} isLogged={isLogged} {...props} />} />
      <Route path="/singlepoll" component={SinglePoll} />
      <Route component={Lost} />
    </Switch>
  </div>
)


export default Home