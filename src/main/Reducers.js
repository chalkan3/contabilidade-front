import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer.js'

import AuthReducer from '../auth/authReducer.js'
import XmlReducer from '../xmlParser/xmlReducer.js'
import EmpresasReducer from '../Empresas/EmpresasReducer.js'
import IndustriaReducer from '../Industria/IndustriaReducer.js'
import CfopReducer from '../Cfop/CfopReducer'
import CstReducer from '../Cst/CstReducer'
import DashBoardReducer from '../DashBoard/dashboardReducer'
import AdminReducer from '../Admin/adminReducers'
import NcmReducer from '../Ncm/NcmReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    xmlParser: XmlReducer,
    Empresa: EmpresasReducer,
    Industria: IndustriaReducer,
    Cfop: CfopReducer,
    Cst: CstReducer,
    Dashboard: DashBoardReducer,
    Admin: AdminReducer,
    Ncm: NcmReducer
})

export default rootReducer