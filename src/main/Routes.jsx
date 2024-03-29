import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import AuthOrApp from './AppOrAuth.jsx'
import XmlParser from '../xmlParser/xmlParser.jsx'
import XmlFormOrRel from '../xmlParser/xmlFormOrRel.jsx'
import Empresas from '../Empresas/Empresas.jsx'
import Industria from '../Industria/Industria.jsx'
import Cfop from '../Cfop/Cfop'
import Cst from '../Cst/Cst'
import DashBoard from '../DashBoard/dashboard'
import Admin from '../Admin/admin'
import Ncm from '../Ncm/Ncm'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path="/dashboard" component={DashBoard} />
            <Route  path="/xmlenviar" component={XmlParser} />
            <Route  path="/xmlapur" component={XmlFormOrRel} />
            <Route  path="/Empresas" component={Empresas} />
            <Route  path="/xmlindustria" component={Industria} />
            <Route  path="/Cfop" component={Cfop} />
            <Route  path="/Cst" component={Cst} />
            <Route path="/Anuidade" component={Admin} />
            <Route path="/Ncm" component={Ncm} />
            
            <Redirect to='/' />
        </Switch>
    </div>

)