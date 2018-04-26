import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import consts from '../consts.js'
import { toastr } from 'react-redux-toastr'

import { showTabs, selectTab } from '../common/tab/tabAction'

const INITIAL_VALUES = { DateForm: { datai: '', dataf: '', empresa: '' }, loading: false}

//exportar para o global
function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    let date = new Date(ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2));
    return date.toJSON()
}


export function initXml(userID){
    return[
        showTabs('xmlSend', 'xmlList', 'tabDelete'),
        selectTab('xmlSend'),
        GetXMLlist(userID)
    ]
}



export  function SelectedDatai(value){
    return updateForm(value,'datai')
}

export  function SelectedDataf(value){
    return updateForm(value,'dataf')
}

export function SelectEmpresa(value){
    return updateForm(value.empCnpj,'empresa')
}

export function SentForm(openClose){
    return{
        type: 'XML_SENT_FORM',
        payload: openClose
    }
}


export function cleanXML(values){
    values.datai = FormataStringData(values.datai)
    values.dataf = FormataStringData(values.dataf)
    return submit(values,'post')
}
function submit(values, method, userID) {
    return dispatch => {
        const id = userID ? userID : ''
        axios[method](`${consts.API_URL}/admin/xmlList/delete/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Cadastro Realizado com sucesso')
                dispatch(initXml(values.userID))
            })
            .catch(e => {
                e.response.data.Errors.forEach(error => toastr.error('Ops...', error))
            })
    }
}
 function GetXMLlist(userID){
    const request = axios.get(`${consts.API_URL}/admin/xmlList/${userID}`)
    return{
        type:'XML_LIST_FETCHED',
        payload: request
    }
}


function updateForm(value,type){
   
    const DateFormUpdate = {type:type,value:value}
    
    return{
        type: 'XML_FORM_SENT',
        payload: DateFormUpdate
    }
}

export function getApuracao(id,datai,dataf,cnpj){
 
    return dispatch => {
        axios.get(`${consts.API_URL}/admin/getDataTable/${id}/${datai}/${dataf}/${cnpj}`)
            .then(resp => dispatch({ type: 'APURACAO_LIST', payload: resp}))
            .then(resp => dispatch(SentForm(true)))
    }
   
}

export function validate(values) {
    
    const errors = {}
    var Cst = values.datai || []

    if (!values.datai) {
        errors.datai = 'Data Inicial é necessária'
    }

    if (!values.dataf) {
        errors.dataf = 'Data Final é necessária'
    }
    if (!values.empresaID){
        errors.empresa = 'É necessário selecionar uma empresa'
    }

    return errors
}
