import React, { Component } from 'react'
import { connect } from 'react-redux'
import IF from "../../operator/if"

import MenuItem from './menuItem.jsx'
import MenuTree from './menuTree.jsx'

class Router extends Component{
    render(){
        return(
            <ul className='sidebar-menu'>
                <MenuItem label='Ínicio' icon='tachometer' path='/dashboard' />    
                <MenuTree label='Importação' icon='paper-plane'>
                    <MenuItem label='Importar NFE' icon='download' path='/xmlenviar'/>
                    <MenuItem label='Relátorios NFE' icon='file' path='/xmlapur' />            
                </MenuTree >
                {/* <MenuTree label='Industria' icon='building-o'>
                    <MenuItem label='Importar NFE (Industria)' icon='download' path='/xmlindustria' />
                </MenuTree > */}
                <MenuTree label='Ajustes' icon='cogs'>
                    <MenuItem label='Empresas' icon='address-book-o' path='/Empresas' />        
                    <MenuItem label='Cfop' icon='cog' path='/Cfop' />
                    <MenuItem label='Cst' icon='cog' path='/Cst' /> 
                </MenuTree>
                <IF test={this.props.user.Admin.length == 30}>
                    <MenuTree label='Administração' icon='cloud'>
                        <MenuItem label='Anuidade' icon='users' path='/Anuidade' />                    
                    </MenuTree>

                </IF>
                
            </ul>

        )
    }
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps,null)(Router)