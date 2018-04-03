import React, { Component } from 'react'
import axios, { post } from 'axios'
import { connect } from 'react-redux'


import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid.jsx'
import Dropzone from 'react-dropzone'

class XmlParser extends Component {
    constructor(){
        super()
        this.state = { files: [] }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDrop(files) {
        this.setState({
            files
        });
    }
    handleSubmit(event){
        const userName = this.props.user.UserName
        const form = new FormData()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        this.state.files.forEach(element => {
            form.append('file', element);
        })
        form.append('userName',userName)
        
        post('http://localhost:3018/oapi/admin/xml',form,config)
        
        //retirar prevent default depois
        event.preventDefault();
       
    }

    render(){
        return(
            <div>
                <ContentHeader title='Enviar XML' small='Versão 1.0' />
                <Content>
                    <Row>
                        <Grid cols='4 4 4' />
                        <Grid cols='4 4 4'>
                            <form onSubmit={this.handleSubmit}>
                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                    <p>Coloque aqui os arquivos para gerar as tabelas correspondentes. (Dois cliques funciona) </p>
                                    <p>Só vão ser aceitos arquivos xml</p>
                                </Dropzone >
                                <aside>
                                    <h2>Arquivos que serão enviados</h2>
                                    <ul>
                                        {
                                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                        }
                                    </ul>
                                </aside>
                                <input type="submit" value="Submit" />
                            </form>
                        </Grid>    
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps,null)(XmlParser)