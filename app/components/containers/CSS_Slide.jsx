import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Trans extends Component {
  render() {
    const { Wrapper, isLogged, priv } = this.props
    
    if (priv && !isLogged) return <Redirect push to='/' />
    
    return (
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={700}
          transitionName="slide">
          {Wrapper}
        </ReactCSSTransitionGroup>
    );
  }
};

const mapStateToProps = (state) => (
  {
    isLogged: state.isLogged.isLogged
  }
)

Trans = connect(mapStateToProps, null)(Trans)

export default Trans