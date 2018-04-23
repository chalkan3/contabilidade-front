import React from 'react'
import MenuItem from './menuItem.jsx'
import MenuTree from './menuTree.jsx'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='Importação' icon='paper-plane'>
            <MenuItem label='Importar NFE' icon='download' path='/xmlenviar'/>
            <MenuItem label='Relátorios NFE' icon='file' path='/xmlapur' />            
        </MenuTree >
        {/* <MenuTree label='Industria' icon='edit'>
            <MenuItem label='Importar NFE (Industria)' icon='usd' path='/xmlindustria' />
        </MenuTree > */}
        <MenuTree label='Ajustes' icon='cogs'>
            <MenuItem label='Empresas' icon='address-book-o' path='/Empresas' />        
            <MenuItem label='Cfop' icon='cog' path='/Cfop' />
            <MenuItem label='Cst' icon='cog' path='/Cst' />           
        </MenuTree>
        
    </ul>
)