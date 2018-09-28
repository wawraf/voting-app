import React from 'react'

const Poll = ({ poll }) => (
  <div className='poll snip1553' data-owner={poll.owner}>
    <div className='pollContent'>
      <h2 className='pollQuestion'>{poll.question}</h2>
      <div className='pollAnswers'>
        {poll.answers.map((answer, index) => {
          return <div key={`poll_${index}`} data-id={answer._id} data-votes={answer.votes} className='pollAnswer'>{answer.answer}</div>
        })}
      </div>
    </div>
    <div className='vote'>
      <h3>OPEN</h3>
    </div>
    <a href='#'></a>
  </div>
)

export default Poll