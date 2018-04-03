import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import AuthOrApp from './AppOrAuth.jsx'
import XmlParser from '../xmlParser/xmlParser.jsx'


export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path="/xmlenviar" component={XmlParser} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>

)