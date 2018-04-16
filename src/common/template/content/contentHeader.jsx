import React from 'react'

export default props => (
    <section className='content-header'>
        {props.children}
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)