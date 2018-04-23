import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import AuthOrApp from './AppOrAuth.jsx'
import XmlParser from '../xmlParser/xmlParser.jsx'
import XmlFormOrRel from '../xmlParser/xmlFormOrRel.jsx'
import Empresas from '../Empresas/Empresas.jsx'
import Industria from '../Industria/Industria.jsx'
import Cfop from '../Cfop/Cfop'
import Cst from '../Cst/Cst'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path="/xmlenviar" component={XmlParser} />
            <Route path="/xmlapur" component={XmlFormOrRel} />
            <Route path="/Empresas" component={Empresas} />
            <Route path="/xmlindustria" component={Industria} />
            <Route path="/Cfop" component={Cfop} />
            <Route path="/Cst" component={Cst} />
            
            <Redirect to='/' />
        </Switch>
    </div>

)