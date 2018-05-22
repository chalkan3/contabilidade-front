import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import axios, { post } from 'axios'
import { withRouter } from "react-router-dom"



import ContentHeader from '../../common/template/content/contentHeader.jsx'
import Content from '../../common/template/content/content.jsx'
import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid.jsx'
import Button from '../../common/form/Button.jsx'
import Pagination from "../../common/pagination/pagination.jsx";
import consts from '../../consts.js'


class IndustriaForm extends Component {
    constructor() {
        super()
        this.state = {
            accepted: [],
            rejected: [],
            send: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDrop(accepted, rejected) {
        let send = accepted.length > 0 ? false : true
        this.setState({
            accepted,
            rejected,
            send
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const userName = this.props.user.UserName
        const userID = this.props.user.UserID

        const form = new FormData()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        this.state.accepted.forEach(element => {
            form.append('file', element);
        })
        form.append('userName', userName)
        form.append('userID', userID)


        post(`${consts.API_URL}/admin/xml`, form, config)

        this.props.history.push('/xmlapur');


    }
    render() {

        var buttonColor = this.state.send == true ? 'btn-default' : 'btn-info'
        var dataPagination = []
        this.state.accepted.map(function (item) {
            dataPagination.push({
                name: item.name,
                size: item.size
            })
        })
        return (
            <div>

                <Row>
                    <Grid cols='4 4 4' />
                    <Grid cols='4 4 4'>
                        <form onSubmit={this.handleSubmit}>
                            <Dropzone onDrop={this.onDrop.bind(this)}
                                accept="text/xml"
                                className='dropzone'>
                                <Grid cols='12 12 12' >
                                    <div>
                                        <Grid cols='4 4 4' />
                                        <Grid cols='4 4 4'>
                                            <h4 className='white-space align-center margin-left-dropzone'>Importação</h4>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid cols='12 12 12' >
                                    <div>
                                        <Grid cols='4 4 4' />
                                        <Grid cols='4 4 4' >
                                            <p className='white-space align-center margin-left-dropzonep'>
                                                <b>*Só irão ser aceitos arquivos .xml</b>
                                            </p>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid cols='12 12 12' >
                                    <div>
                                        <Grid cols='4 4 4' />
                                        <Grid cols='4 4 4' >
                                            <button className='btn btn-danger btn-flat form-control button-dropzon' type='button'>Upload</button>
                                        </Grid>
                                    </div>
                                </Grid>

                            </Dropzone >
                            <Grid cols='12 12 12' >
                                
                                <aside>
                                    <h2 className='white-space'>Arquivos que serão enviados</h2>
                                    <Pagination data={dataPagination} />

                                </aside>
                            </Grid>
                            <Grid cols='12 12 12' >
                                <div>
                                    <Grid cols='4 4 4' />
                                    <Grid cols='4 4 4' >
                                        <Button disabled={this.state.send} type='submit' classButton={`btn ${buttonColor} btn-flat  iconMargin buttonUpload`} icon='upload' label='importar' />
                                    </Grid>
                                </div>
                            </Grid>
                        </form>
                    </Grid>
                </Row>
            </div>
        )
    }
}


const mapDispatchToProps = state => ({ user: state.auth.user, Industria: state.Industria })
export default withRouter(connect(mapDispatchToProps, null)(IndustriaForm))