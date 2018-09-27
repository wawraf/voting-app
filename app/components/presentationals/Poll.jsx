import React from 'react'

const Poll = ({ poll }) => (
  <div className='poll'>
    <div className='pollQuestion'>{poll.question}</div>
    <div className='pollAnswers'>
      {poll.answers.map((answer, index) => {
        return <div key={`poll_${index}`} className='pollAnswer'>{answer.answer}</div>
      })}
    </div>
  </div>
)

export default Poll