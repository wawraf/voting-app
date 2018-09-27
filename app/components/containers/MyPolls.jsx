import React, { Component } from 'react'

//Import modules
import Poll from '../presentationals/Poll'

// Addon for UI animation
import CSS_Slide from './CSS_Slide'

class MyPolls extends Component {
  render() {
    
    const content = (  
      <div className='polls side'>
        <h1>My Polls</h1>
        <div className='pollsList'>
          <div className='pollOnList'>
            <a href='#'>See this poll</a>
          </div>
        </div>

        <div className='pollsList'>
          <div className='pollOnList'>
            <a href='#'>See this poll</a>
          </div>
        </div>

        <div className='pollsList'>
          <div className='pollOnList'>
            <a href='#'>See this poll</a>
          </div>
        </div>

        <div className='addPoll'>
          <button className='btn btnAdd'>ADD</button>

        </div>
      </div>
    )
    
    return <CSS_Slide Wrapper={content} priv={true} {...this.props} /> 
    
  }
} 

export default MyPolls