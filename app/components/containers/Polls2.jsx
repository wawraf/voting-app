import React, { Component } from 'react'

// Addon for UI animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//Import modules
import Poll from './Poll'

class Polls extends Component {
  
  render() {
  return (
    <ReactCSSTransitionGroup
          transitionName="slide"
          transitionAppearTimeout={600}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

      <div key='21_sd' className='polls side'>
        <h1>Created polls</h1>
        <div className='pollsList'>
          <div className='pollOnList'>
            <Poll />
            <a href='#'>See this pollllllll</a>
          </div>
        </div>

        <div className='pollsList'>
          <div className='pollOnList'>
            <Poll />
            <a href='#'>See this pollllllll</a>
          </div>
        </div>

        <div className='pollsList'>
          <div className='pollOnList'>
            <Poll />
            <a href='#'>See this pollllllll</a>
          </div>
        </div>

        <div className='addPoll'>
          <button className='btn btnAdd'>ADD</button>

        </div>
      </div>
      
    </ReactCSSTransitionGroup>
  )
  }
}

export default Polls