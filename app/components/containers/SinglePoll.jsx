import React from 'react'

//Import modules
import Poll from '../presentationals/Poll'

const SinglePoll = () => (
  <div className='singlePoll side'>
    <Poll />
    <button>DELETE POLL</button>
  </div>
)

export default SinglePoll