import React,  { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

//Import modules
import Loader from './Loader'

const summary = (polls) => {
  const numberOfPolls = polls.length
  
  const numberOfAnswers = polls.map(poll => {
    return poll.answers.length
  }).reduce((sum, x) => sum + x)
  
  const averageNumberOfAnswers = (numberOfAnswers / numberOfPolls).toFixed(1)
  
  let counter = 0
  let popular = {}
  const numberOfVotes = polls.reduce((totalCounter, poll) => {
    let temp = poll.answers.reduce((sum, val) => sum + val.votes, 0)
    if ( counter < poll.answers.reduce((sum, val) => sum + val.votes, 0) ) {
      counter = temp
      popular = { question: poll.question, votes: counter, _id: poll._id }
    }
    return totalCounter + temp
  }, 0)
  
  return {
    numberOfPolls,
    numberOfAnswers,
    averageNumberOfAnswers,
    numberOfVotes,
    popular
  }
}


class Summary extends Component {
  componentDidMount() {
    if (!this.props.isLogged) return
    const { owner, getPolls } = this.props
    getPolls(owner)
  }
  
  render() {
    const { polls, loading, isLogged } = this.props
    
    if (!isLogged) return <Redirect push to='/' /> 
    if (loading) return <Loader />
    
    if (polls.length == 0) return <h1>You don't have any polls.</h1>
    
    const { numberOfPolls,
            numberOfAnswers,
            averageNumberOfAnswers,
            numberOfVotes,
            popular } = summary(polls)
    
    return (
      <div className='summaryMain'>
        <h1 className='summaryTitle'>Your Summary</h1>
        <div className='summaryTable'>
          <div className='summaryEntry'>
            <div><p>Total number of polls:</p></div>
            <div><p>{numberOfPolls}</p></div>
          </div>
          <div className='summaryEntry'>
            <div><p>Total number of answers:</p></div>
            <div><p>{numberOfAnswers}</p></div>
          </div>
          <div className='summaryEntry'>
            <div><p>Average number of answers:</p></div>
            <div><p>{averageNumberOfAnswers} / poll</p></div>
          </div>
          <div className='summaryEntry'>
            <div><p>Total number of votes:</p></div>
            <div><p>{numberOfVotes}</p></div>
          </div>
          <div className='summaryEntry'>
            <div><p>Your most popular poll:</p></div>
            <div><p>
              <Link to={`/singlepoll/${popular._id}`} >
                {`${popular.question} - ${popular.votes} votes`}
              </Link>
            </p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary