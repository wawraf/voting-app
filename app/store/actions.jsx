import actionTypes from './actionTypes';

const action1 = text => {
  return {type: actionTypes.ACTION_1, text}
};

const action2 = index => {
  return {type: actionTypes.ACTION_2, index}
}

module.exports = {
  action1,
  action2
}