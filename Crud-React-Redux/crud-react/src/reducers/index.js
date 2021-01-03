  import { combineReducers } from 'redux'
  import person from './Users'
  import { reducer as formReducers } from 'redux-form'

  export default combineReducers({
      person,
      form: formReducers
  })