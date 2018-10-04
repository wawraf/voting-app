import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Import modules
import Loader from './Loader'
import PieChart from './PieChart'

class SinglePoll extends Component {
  componentDidMount() {
    if (this.props.poll.removed == undefined) {
      const pid = this.props.match.params.pid
      const { getPoll } = this.props
      getPoll(pid)
    }
  }
  
  render() {
    const { loading } = this.props
    const { poll, currentUser, logged, vote, removePoll, addAnswer } = this.props
    
    if (this.props.poll.removed) return <h1>Poll deleted!</h1>
    
    if (loading || Object.keys(poll).length == 0) return <Loader />
    
    return (
      <div className='pollContainer'>
        <div className='singlePoll'>
          <div className='onePoll'>
            <h2 className='pollQuestion'>{poll.question}</h2>
            <div className='pollAnswers'>
              {poll.answers.map((answer, index) => {
                return (
                  <div key={`poll_${index}`} data-id={answer._id} data-votes={answer.votes} className='singlePollAnswer'>
                    <div className='singleAnswer'>{answer.answer}</div>
                    <div className='singleVote'>{answer.votes}</div>
                    <div className='btnVote' onClick={() => vote(index, poll._id, answer._id)}>Vote</div>
                  </div>
                )
              })
              }
            </div>
            <div className='singlePollBtns_2'>
              <a href='' className='btn btnAddAnswer' onClick={(e) => { e.preventDefault(); addAnswer() }}>
                <span>ADD ANSWER</span>
              </a>
            </div>
          </div>
          <div className='oneChart'>
            {poll.answers ? <PieChart data={poll.answers} /> : null}
          </div>
        </div>
        {
          currentUser == poll.owner 
          ? <div className='singlePollBtns'>
              <Link to='/singlepoll/deleted' className='btn btnDelete' onClick={() => removePoll(poll._id)}>
                <span>DELETE</span>
              </Link>
            </div>
          : null
        }
      </div>
    )
  }
}

export default SinglePoll