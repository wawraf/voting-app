import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Import modules
import Sidebar from './Sidebar'
import Polls from './Polls'
import MyPolls from './MyPolls'
import SinglePoll from './SinglePoll'
import Lost from './404'

const Home = ({ isLogged }) => 
(
  <div className='home'>
    <Sidebar isLogged={isLogged} />
    <Switch>
      <Route exact path='/' />
      <Route path='/polls' exact render={(props) => <Polls {...props} />} />
      <Route path="/mypolls" render={(props) => <MyPolls {...props} />} />
      <Route path="/singlepoll/:pid" component={SinglePoll} />
      <Route component={Lost} />
    </Switch>
  </div>
)

export default Home