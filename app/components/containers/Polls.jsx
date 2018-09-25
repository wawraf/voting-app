import React from 'react'

//Import modules
import Poll from './Poll'

const Polls = () => (
  <div className='polls side'>
    <h1>Created polls</h1>
    <div className='pollsList'>
      <div className='pollOnList'>
        <Poll />
        <a href='#'>See this poll</a>
      </div>
    </div>
    
    <div className='pollsList'>
      <div className='pollOnList'>
        <Poll />
        <a href='#'>See this poll</a>
      </div>
    </div>
    
    <div className='pollsList'>
      <div className='pollOnList'>
        <Poll />
        <a href='#'>See this poll</a>
      </div>
    </div>
    
    <div className='addPoll'>
      <button className='btn btnAdd'>ADD</button>
      
    </div>
  </div>
)

export default Polls