import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sweetalert from 'sweetalert'

//Import modules
import Loader from './Loader'
import PieChart from './PieChart'
import AddAnswerForm from './AddAnswerForm'

const swal = (remove, id) => sweetalert({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this poll!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    remove(id)
    sweetalert("Your poll has been deleted!", {
      icon: "success",
    });
  }
});

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
    const { poll, currentUser, logged, vote, removePoll, addAnswer, showAddAnswerForm } = this.props
    
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
            {logged ? <div className='singlePollBtns_2'>
              <a href='' className='btn btnAddAnswer' onClick={(e) => { e.preventDefault(); addAnswer('showForm') }}>
                <span>ADD ANSWER</span>
              </a>
            </div> : null}
          </div>
          <div className='oneChart'>
            {poll.answers ? <PieChart data={poll.answers} /> : null}
          </div>
        </div>
        {
          currentUser == poll.owner 
          ? <div className='singlePollBtns'>
              <Link to='/singlepoll/deleted' className='btn btnDelete' onClick={() => swal(removePoll, poll._id)}>
                <span>DELETE POLL</span>
              </Link>
            </div>
          : null
        }
        {showAddAnswerForm
        ? <AddAnswerForm />
        : null
        }
      </div>
    )
  }
}

export default SinglePoll