import React from 'react'
import { connect } from 'react-redux'
import { addAnswer, onInputChange } from '../../store/actions'

const _AddAnswerForm = ({ pid, closeForm, addAnswer }) => {
let input = ''

return (
  <div className='addAnswerFormContainer' onClick={() => closeForm()}>
    <div className='addAnswerForm' onClick={(e) => e.stopPropagation()}>
      <span className="close" onClick={() => closeForm()}></span>
      <form id='answerForm' onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return
          addAnswer(pid, input.value)
        }
      }>

        <input
          autoFocus
          spellCheck="false"
          autoComplete='off'
          required
          ref={ node => { input = node } }
          name="email" type="text" className="feedback-input" placeholder="New answer" />
        <input type="submit" value="SEND"/>
      </form>
    </div>
  </div>
)
}

const mapStateToProps = state => (
  {
    pid: state.currentPoll._id
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    closeForm: () => dispatch(addAnswer('closeForm')),
    addAnswer: (_id, answer) => dispatch(addAnswer({_id, answer}))
  }
)

const AddAnswerForm = connect(mapStateToProps, mapDispatchToProps)(_AddAnswerForm)

export default AddAnswerForm