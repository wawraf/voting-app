import React from 'react'
import { connect} from 'react-redux'
import { getOnePoll, vote, removePoll } from '../../store/actions'

//Import modules
import SinglePoll from '../presentationals/_SinglePoll'

const mapStateToProps = (state) => (
  {
    poll: state.currentPoll,
    loading: state.isLoading,
    logged: state.isLogged.isLogged,
    currentUser: state.isLogged.user
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getPoll: (pid) => dispatch(getOnePoll(pid)),
    vote: (index, pid, aid) => dispatch(vote(index, pid, aid)),
    removePoll: (pid) => dispatch(removePoll(pid))
  }
)

const Poll = connect(mapStateToProps, mapDispatchToProps)(SinglePoll)

export default Poll