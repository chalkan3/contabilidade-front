import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer.js'

import AuthReducer from '../auth/authReducer.js'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer