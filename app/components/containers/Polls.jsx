import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPolls } from '../../store/actions'

//Import modules
import Poll from '../presentationals/Poll'
import Loader from '../presentationals/Loader'

// Addon for UI animation
import CSS_Slide from './CSS_Slide'

class Polls extends Component {
  componentDidMount() {
    const { getAllPolls } = this.props
    getAllPolls()
  }
  
  render() {
    const { polls, loading } = this.props
    
    if (loading || polls.length == 0) return <Loader />
    
    const content = (
      <div className='polls side'>
        <div className='pollsList'>
        {polls.map((poll, index) => {
          return (
                <Poll key={`poll_${index}`} poll={poll} />
          )
        })}
        </div>
        
      </div>
    )
    
    return <CSS_Slide Wrapper={content} {...this.props} />
  }
}

const mapStateToProps = (state) => (
  {
    polls: state.allPolls,
    loading: state.isLoading
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getAllPolls: () => dispatch(getAllPolls())
  }
)

Polls = connect(mapStateToProps, mapDispatchToProps)(Polls)

export default Polls