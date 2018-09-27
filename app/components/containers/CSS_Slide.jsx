import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Trans extends Component {
  render() {
    const { Wrapper, isLogged, priv } = this.props
    
    if (priv && isLogged == false) return <Redirect push to='/' />
    
    return (
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionLeave={false}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
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