import axios from 'axios'
import { reset as resetForm } from 'redux-form'

const INITIAL_VALUES = { DateForm: { datai: '', dataf: '' }, loading: false}

const BASE_URL = 'http://54.233.79.155/oapi/admin'



export  function SelectedDatai(value){
    return updateForm(value,'datai')
}

export  function SelectedDataf(value){
    return updateForm(value,'dataf')
}

export function SentForm(openClose){
    return{
        type: 'XML_SENT_FORM',
        payload: openClose
    }
}




function updateForm(value,type){
   
    const DateFormUpdate = {type:type,value:value}
    
    return{
        type: 'XML_FORM_SENT',
        payload: DateFormUpdate
    }
}

export function getApuracao(id,datai,dataf){
 
    return dispatch => {
        axios.get(`${BASE_URL}/getDataTable/${id}/${datai}/${dataf}`)
            .then(resp => dispatch({ type: 'APURACAO_LIST', payload: resp}))
            .then(resp => dispatch(SentForm(true)))
    }
   
}

