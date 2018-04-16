import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import consts from '../consts.js'
import { showTabs, selectTab } from '../common/tab/tabAction'

const INITIAL_VALUES = { DateForm: { datai: '', dataf: '', empresa: '' }, loading: false}

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

