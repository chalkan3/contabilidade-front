import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './authActions.js'
import Row from '../common/layout/row.jsx'
import Grid from '../common/layout/grid.jsx'
import Messages from '../common/msg/msg.jsx'
import Input from '../common/form/inputAuth.jsx'
import FormContato from './FormContato'
import { contatoNovo } from './authActions'



//images 
import LogoImg from '../common/template/img/rgori.png'
import NotreDameSvg from '../common/template/img/notre-dame.svg'
import MonitoCash from '../common/template/img/monitor-cash-credit-card.svg'
import MonitoLoad from '../common/template/img/monitor-loading-progress.svg'
import MonitoWindow from '../common/template/img/monitor-window.svg'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true, showMenu: false }

        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    onSubmit(values) {
        const { login } = this.props
        this.state.loginMode ? login(values) : ""
        document.removeEventListener('click', this.closeMenu);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true, }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }
    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <div >
                <header className="header">
                    <div className="container">
                        <div className="col-md-4 col-xs-4">
                            <a href="index.html">
                                <img src={LogoImg} className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <nav className="main-menu">
                                <ul>
                                    <li>
                                        <a href="#contato">Comprar</a>
                                    </li>
                                    <li>
                                        <a href="#sobre">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="#">Rgori</a>
                                    </li>
                                    <li className='testes' ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}>
                                        <button className='ntb' onClick={this.showMenu} >
                                            <span className="caret"></span>
                                            Entrar

                                        </button>

                                        {
                                            this.state.showMenu
                                                ? (
                                                    <ul role="menu">
                                                        <div className="col-md-4">
                                                            <div className="text-center">
                                                                <h3>
                                                                    <b>Entrar</b>
                                                                </h3>
                                                            </div>
                                                            <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                                                                <Field component={Input} type="input" name="nada"
                                                                    placeholder="Nome" icon='user' hide={loginMode} />
                                                                <Field component={Input} type="text" name="Email"
                                                                    placeholder="E-mail" icon='envelope' />
                                                                <Field component={Input} type="password" name="Password"
                                                                    placeholder="Senha" icon='lock' />
                                                                <Field component={Input} type="password" name="confirm_password"
                                                                    placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                                                                <Row>
                                                                    <Grid cols="4">
                                                                        <button type="submit"
                                                                            className="ntb ntb-primary ntb-block ntb-flat">
                                                                            {loginMode ? 'Entrar' : 'Registrar'}
                                                                        </button>
                                                                    </Grid>
                                                                </Row>
                                                            </form>
                                                        </div>
                                                    </ul>


                                                )
                                                : (
                                                    null
                                                )
                                        }
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header >
                <main>
                    <section className="section-intro">
                        <div className="container">
                            <div className="left-intro col-md-4">
                                <h1>Apure seu Difal/Goiás com simplicidade e eficíencia</h1>
                                <a  href='#contato' className="ntb">Comprar Agora</a>
                            </div>
                            <div className="right-intro col-offset-md-4 col-md-4 col-xs-4 ">
                                <img className="img-fluid" src={NotreDameSvg} alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="section-investimento">
                        <div className="container">
                            <ul className="investimento-lista">
                                <li className="col-md-3 col-sm-2">
                                    <h1>Modulo Comercio</h1>
                                    <p className="box-subtitle">Difal para o comercio</p>
                                    <p className="box-text">Apuração / relátorio</p>
                                    <a href='#contato' className="ntb">Contato</a>

                                </li>
                                <li className="col-md-3 col-sm-2">
                                    <h1>Modulo Industria</h1>
                                    <p className="box-subtitle">Difal para a Industria</p>
                                    <p className="box-text">Apuração / relátorio / NCM</p>
                                    <a href='#contato' className="ntb">Contato</a>

                                </li>
                                <li className="col-md-3 col-sm-2">
                                    <h1>Cadastro CST</h1>
                                    <p className="box-subtitle">CST para o Difal</p>
                                    <p className="box-text">CST padrão / Cadastro </p>
                                    <a href='#contato' className="ntb">Contato</a>

                                </li>
                                <li className="col-md-3 col-sm-2">
                                    <h1>Cadastro CFOP</h1>
                                    <p className="box-subtitle">CFOP para o difal</p>
                                    <p className="box-text">CFOP padrão / Cadastro </p>
                                    <a href='#contato' className="ntb">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="section-vantagem" id='sobre'>
                        <div className="container">
                            <div className="row">
                                <h1 className="vantagem-titulo">Mais Facil que Gastar Dinheiro</h1>
                                <ul className="vantagem-lista">
                                    <li className="col-md-4">
                                        <img className="img-fluid" src={MonitoCash} alt="" />
                                        <h1 className="vantagem-titulo-interno">Relátorio</h1>
                                        <p>De acordo com o decreto 9104/17 e suas alterações</p>
                                    </li>
                                    <li className="col-md-4">
                                        <img className="img-fluid" src={MonitoLoad} alt="" />
                                        <h1 className="vantagem-titulo-interno">Rapidez</h1>
                                        <p>De acordo com as fórmulas do decreto 9104/17 e alterções</p>
                                    </li>
                                    <li className="col-md-4">
                                        <img className="img-fluid" src={MonitoWindow} alt="" />
                                        <h1 className="vantagem-titulo-interno">Acesso</h1>
                                        <p>Acesse o programa em qualquer computador. Basta apenas ter a internet</p>
                                    </li>
                                </ul>
                                <div className="col-md-12 col-sm-12">
                                    <a href="#contato" className="ntb">Entre em contato</a>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-foto">
                        <div className="mask-blue">
                            <div className="container">
                                <div className="contents">
                                    <div className="col-md-6">
                                        <p>
                                            Todo auxílio técnico é bem vindo, 
                                            porém nada subistitui o conhecimento
                                            do profissional
                                        </p>

                                    </div>
                                    <div className="col-md-12">
                                        <h1>J. Rodrigues</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FormContato onSubmit={contatoNovo}/>
                    <footer className="footer">
                        <h1>Rgori</h1>
                    </footer>

                </main>

                <Messages />
            </div >


        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login,contatoNovo }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)