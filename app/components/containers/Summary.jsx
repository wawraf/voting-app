import React from 'react'
import { connect } from 'react-redux'
import { getMyPolls } from '../../store/actions'

import _Summary from '../presentationals/_Summary'

const mapDispatchToProps = (dispatch) => (
  {
    getPolls: (owner) => dispatch(getMyPolls(owner))
  }
)

const mapStateToProps = (state) => (
  {
    polls: state.allPolls,
    loading: state.isLoading,
    owner: state.isLogged.user,
    isLogged: state.isLogged.isLogged
  }
)

const Summary = connect(mapStateToProps, mapDispatchToProps)(_Summary)

export default Summary