import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getApuracao, SentForm } from './xmlActions.js'

class XmlFormTable extends Component {

    componentWillUnmount() {
        this.props.SentForm(false)
    }



    numberToReal(numb) {
        var numb = numb.toFixed(2).split('.');
        numb[0] = numb[0].split(/(?=(?:...)*$)/).join('.');
        return numb.join(',');
    }


    formatNumberBr(text) {
        if (typeof (text) === "undefined") {
            return 0
        } else {
            const compativelComParseFloat = text.replace(",", ".")
            const val = parseFloat(compativelComParseFloat)
            return val
        }


    }

    calculateApuracao(valorEnt, valorDev) {
        //embaixo - se for negativo
        var valorTotal = (valorEnt - valorDev)

        return valorTotal

    }

   

    calculateAll() {
        const sum = (t, v) => t + v
        var EntArr = []
        var SaiArr = []
        var valorTotal = 0

        this.props.xmlParser.apuracaoList.ListXML.Ent === null ? EntArr = [""] : EntArr = this.props.xmlParser.apuracaoList.ListXML.Ent
        this.props.xmlParser.apuracaoList.ListXML.Sai === null ? SaiArr = [""] : SaiArr = this.props.xmlParser.apuracaoList.ListXML.Sai

        var EntValor = EntArr.map(e => +e.ValorDifal || 0).reduce(sum)
        var SaiValor = SaiArr.map(s => +s.ValorDifal || 0).reduce(sum),
            valorTotal = this.calculateApuracao(EntValor, SaiValor)



        return {
            sumOfent: EntValor,
            sumOfsai: SaiValor,
            valorTotal: valorTotal
        }
    }

   
    breakPage(flag){
        const listDev = this.props.xmlParser.apuracaoList.ListXML.Sai || []
        const listEnt = this.props.xmlParser.apuracaoList.ListXML.Ent || []
        let lenTotal = listEnt.length + listDev.length 

        for(let i=0;i < lenTotal;i++){
            if (i <= listEnt.length && flag == 'aq' && (lenTotal % 15) == 0){
                return(
                    <div className='break-page'></div>                    
                )
            } else if (i <= listEnt.length && flag == 'dev' && (lenTotal % 15) == 0){
                return(
                    <div className='break-page'></div>                    
                )
            }
        }
       
        
    }

    renderRowsAq() {
        const listEnt = this.props.xmlParser.apuracaoList.ListXML.Ent || []
        const listDev = this.props.xmlParser.apuracaoList.ListXML.Sai || []

        
        if (listDev.length > 0 && listEnt.length == 0) {
            return listDev.map(apuracao => (
                <tr key={apuracao.ChaveFiscal + 'key'}>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                </tr>
            ))
        } else if (listDev.length == 0 && listEnt.length == 0) {
            for (var i = 0; i < 5; i++) {
                return (
                    <tr>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                    </tr>
                )
            }
        } else {
            return listEnt.map((apuracao,index) => {
                return (<tr key={apuracao.ChaveFiscal}>

                    <td>{apuracao.EntData}</td>
                    <td>{apuracao.Cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")}</td>
                    <td>{apuracao.NotaFiscal}</td>
                    <td>{apuracao.ChaveFiscal}</td>
                    <td className='text-right'>{apuracao.VoperDifalFormated}</td>
                    <td className='text-right'>{apuracao.ValorDifalFormated}</td>
                </tr>
                )
            })
        }



    }

    renderRowsDev() {
        const listEnt = this.props.xmlParser.apuracaoList.ListXML.Ent || []
        const listDev = this.props.xmlParser.apuracaoList.ListXML.Sai || []

        if (listDev.length == 0 && listEnt.length > 0) {
            return listEnt.map(apuracao => (
                <tr key={apuracao.ChaveFiscal + 'key'}>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                    <td>{''}</td>
                </tr>
            ))
        } else if (listDev.length == 0 && listEnt.length == 0) {
            for (var i = 0; i < 5; i++) {
                return (
                    <tr>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                        <td>{''}</td>
                    </tr>
                )
            }
        } else {
            return listDev.map((apuracao,index) => {
                const bindClassBreak = index == 5 ? 'break-page' : ''
                return (
                    <tr key={apuracao.ChaveFiscal} className={bindClassBreak}>
                        <td>{apuracao.EntData}</td>
                        <td>{apuracao.Cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")}</td>
                        <td>{apuracao.NotaFiscal}</td>
                        <td>{apuracao.ChaveFiscal}</td>
                        <td className='text-right'>{apuracao.VoperDifalFormated}</td>
                        <td className='text-right'>{apuracao.ValorDifalFormated}</td>
                    </tr>)
            })
        }

    }

    showDate(){
        if(this.props.xmlParser.DateForm.dia != '' || this.props.xmlParser.DateForm.ano != '' ){
            return this.props.xmlParser.DateForm.dia + '/' + this.props.xmlParser.DateForm.ano
        }else{
            return '_____/______'
            
        }
    }

    render() {
        const { sumOfent, sumOfsai, valorTotal } = this.calculateAll()
        const devValorFormatado = valorTotal <= 0 ? this.numberToReal(valorTotal) : this.numberToReal(0)
        const entValorFormatado = valorTotal >= 0 ? this.numberToReal(valorTotal) : this.numberToReal(0)
        const Empresa = this.props.xmlParser.apuracaoList.Empresa
        return (
            <div>
              
                <div className='table-responsive col-md-12'>
                    <div className="box">

                        <div className='box-body table-responsive '>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr >
                                        <th colSpan={7}>
                                            <h3 className='center-align'>Demonstrativo Mensal  das Aquisições e Devoluções Interestaduais de Mercadorias
                                            Destinadas à Comercialização
                                            </h3>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <p className='pull-right'>
                                                Período de Apuração
                                                (Mês/Ano)
                                            </p>
                                        </th>
                                        <th>
                                            <p >
                                               {this.showDate()}
                                            </p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Empresa Nome</th>
                                        <th>Cnpj</th>
                                        <th colSpan={7}>Inscrição Estadual</th>                                                                                
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{Empresa.empNome}</td>
                                        <td>{Empresa.empCnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")}</td>
                                        <td colSpan={7}>{Empresa.empInsc}</td>                                        
                                    </tr>
                                </tbody>
                            </table>
                            <table className='table table-bordered'>
                                <thead>
                                   
                                    <tr>
                                        <th colSpan={6}><h4>Aquisições</h4></th>
                                    </tr>
                                    <tr>
                                        <th>Data Da Entrada</th>
                                        <th>CNPJ Do Remetente</th>
                                        <th>N° NF-E</th>
                                        <th>Chave da NF-E</th>
                                        <th>Voper Difal</th>
                                        <th>Valor Difal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRowsAq()}
                                <tr>
                                    <td colSpan='6' align="right">
                                        1- Total DIFAL - Aquisições : <b>{this.numberToReal(sumOfent)}</b>
                                    </td>
                                </tr>
                                </tbody>

                            </table>
                            {this.breakPage('aq')}
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th colSpan={6}><h3>Devoluções</h3></th>
                                    </tr>
                                    <tr>
                                        <th>Data Da Entrada</th>
                                        <th>CNPJ Do Remetente</th>
                                        <th>N° NF-E</th>
                                        <th>Chave da NF-E</th>
                                        <th>Voper Difal</th>
                                        <th>Valor Difal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRowsDev()}
                                <tr>
                                    <td colSpan={6} align="right">
                                        1- Total DIFAL - Devoluções: <b>{this.numberToReal(sumOfsai)}</b>
                                    </td>
                                </tr>
                                </tbody>


                            </table>
                            {this.breakPage('dev')}
                            <table className='table table-bordered'>
                               <tbody>
                                    <tr>
                                        <td colSpan={6} align="right">
                                            DIFAL a Pagar: <b>{entValorFormatado}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} align="right">
                                            DIFAL a Compensar em períodos Posteriores: <b>{devValorFormatado}</b>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </div>



        )
    }
}


const mapStateToProps = state => ({ xmlParser: state.xmlParser, user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({ getApuracao, SentForm }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(XmlFormTable)
