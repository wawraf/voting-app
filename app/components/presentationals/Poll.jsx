import React from 'react'
import { Link } from 'react-router-dom'

const Poll = ({ poll }) => (
  <div className='poll snip1553' data-owner={poll.owner}>
    <div className='pollContent'>
      <h2 className='pollQuestion'>{poll.question}</h2>
      <div className='pollAnswers'>
        {poll.answers.map((answer, index) => {
          return (
            <div key={`poll_${index}`} data-id={answer._id} data-votes={answer.votes} className='pollAnswer'>
              <div className='singleAnswer'>{answer.answer}</div>
              <div className='singleVote'>{answer.votes}</div>
            </div>
          )
        })}
      </div>
    </div>
    <div className='open'>
      <h3>OPEN</h3>
    </div>
    <Link to={`/singlepoll/${poll._id}`}></Link>
  </div>
)

export default Poll