import React from 'react'
import MenuItem from './menuItem.jsx'
import MenuTree from './menuTree.jsx'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='NFE' icon='edit'>
            <MenuItem label='Importar NFE' icon='usd' path='/xmlenviar'/>
            <MenuItem label='Relátorios NFE' icon='usd' path='/xmlapur' />            
        </MenuTree >
    </ul>
)