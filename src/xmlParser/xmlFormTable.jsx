import React , { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getApuracao, SentForm  } from './xmlActions.js'

class XmlFormTable extends Component{

    componentWillUnmount(){
        this.props.SentForm(false)
    }

    numberToReal(numb) {
        var numb = numb.toFixed(2).split('.');
        numb[0] = numb[0].split(/(?=(?:...)*$)/).join('.');
        return numb.join(',');
    }


    formatNumberBr(text){
        if (typeof (text) === "undefined"){
            return 0
        }else{
            const compativelComParseFloat = text.replace(",", ".")
            const val = parseFloat(compativelComParseFloat)
            return val
        }
       
        
    }

    calculateAll(){
        const sum = (t, v) => t + v
        var EntArr = []
        var SaiArr = []
        
        this.props.xmlParser.apuracaoList.Ent === null ? EntArr = [""]  :  EntArr = this.props.xmlParser.apuracaoList.Ent
        this.props.xmlParser.apuracaoList.Sai === null ? SaiArr = [""]  : SaiArr = this.props.xmlParser.apuracaoList.Sai 

        return{
            sumOfent: EntArr.map(e => +e.ValorDifal || 0).reduce(sum),
            sumOfsai: SaiArr.map(s => +s.ValorDifal || 0).reduce(sum)
            
        }
    }

    renderRowsAq(){
        const listEnt = this.props.xmlParser.apuracaoList.Ent || []
        const listDev = this.props.xmlParser.apuracaoList.Dev || []


        if (listDev.length > 0 && listEnt.length == 0){
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
        } else if (listDev.length == 0 && listEnt.length == 0){
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
        }else{
            return listEnt.map(apuracao => (
                <tr key={apuracao.ChaveFiscal}>
                    <td>{apuracao.EntData}</td>
                    <td>{apuracao.Cnpj}</td>
                    <td>{apuracao.NotaFiscal}</td>
                    <td>{apuracao.ChaveFiscal}</td>
                    <td>{apuracao.VoperDifalFormated}</td>
                    <td>{apuracao.ValorDifalFormated}</td>
                </tr>
            ))
        }


        
    }

    renderRowsDev() {
        const listEnt = this.props.xmlParser.apuracaoList.Ent || []
        const listDev = this.props.xmlParser.apuracaoList.Dev || []
       
        if (listDev.length == 0 && listEnt.length  > 0){
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
        } else if (listDev.length == 0 && listEnt.length == 0){
            for(var i=0;i < 5;i++){
                return(
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
        }else{
            return listDev.map(apuracao => (
                <tr key={apuracao.ChaveFiscal}>
                    <td>{apuracao.EntData}</td>
                    <td>{apuracao.Cnpj}</td>
                    <td>{apuracao.NotaFiscal}</td>
                    <td>{apuracao.ChaveFiscal}</td>
                    <td>{apuracao.VoperDifalFormated}</td>
                    <td>{apuracao.ValorDifalFormated}</td>
                </tr>
            ))
        }
        
    }

    render(){
        const { sumOfent, sumOfsai } = this.calculateAll()
        return(
          <div>
                <div className="box">
                    <div className='box-header with-border'>
                        <h3 className='box-tittle'>
                            Aquisições
                    </h3>
                    </div>
                    <div className='box-body'>
                        <table className='table table-bordered'>
                            <thead>
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
                            </tbody>
                        </table>
                    </div>
                    <div className="box-footer ">
                        <div className='col-md-8'></div>
                        <div className='col-md-2'>1- Total DIFAL - Aquisições</div>
                        <div className='col-md-2'>
                            <b>{this.numberToReal(sumOfent)}</b>
                        </div>
    
                    </div>
                </div>

                <div className="box">
                    <div className='box-header with-border'>
                        <h3 className='box-tittle'>
                            Devoluções
                    </h3>
                    </div>
                    <div className='box-body'>
                        <table className='table table-bordered'>
                            <thead>
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
                            </tbody>

                        </table>
                    </div>
                    <div className="box-footer ">
                        <div className='col-md-8'></div>
                        <div className='col-md-2'>1- Total DIFAL - Devoluções</div>
                        <div className='col-md-2'>
                            <b>{this.numberToReal(sumOfsai)}</b>
                        </div>

                    </div>
                </div>
          </div>

        )
    }
}


const mapStateToProps = state => ({ xmlParser: state.xmlParser, user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({ getApuracao, SentForm },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(XmlFormTable)
