import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMyPolls } from '../../store/actions'

//Import modules
import Poll from '../presentationals/Poll'
import Loader from '../presentationals/Loader'

// Addon for UI animation
import CSS_Slide from './CSS_Slide'

class MyPolls extends Component {
  componentDidMount() {
    const { getMyPolls, owner } = this.props
    getMyPolls(owner)
  }
  
  render() {
    const { polls, loading } = this.props
    
    if (loading) return <Loader />
    
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
    
    return <CSS_Slide Wrapper={content} priv={true} {...this.props} /> 
    
  }
}

const mapStateToProps = (state) => (
  {
    polls: state.allPolls,
    loading: state.isLoading,
    owner: state.isLogged.user
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getMyPolls: (owner) => dispatch(getMyPolls(owner))
  }
)

MyPolls = connect(mapStateToProps, mapDispatchToProps)(MyPolls)

export default MyPolls