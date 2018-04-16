import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer.js'

import AuthReducer from '../auth/authReducer.js'
import XmlReducer from '../xmlParser/xmlReducer.js'
import EmpresasReducer from '../Empresas/EmpresasReducer.js'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    xmlParser: XmlReducer,
    Empresa: EmpresasReducer
})

export default rootReducer