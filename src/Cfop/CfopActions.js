import axios from 'axios'
import consts from '../consts.js'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'


import { showTabs, selectTab } from '../common/tab/tabAction'

const INITIAL_VALUES = {}
export function initCfop(userID){
    return[
        showTabs('CfopList','CfopAdd'),
        selectTab('CfopList'),
        getCfopList(userID),
        initialize('Cadcfop', INITIAL_VALUES)
    ]
}

export function AddCfop(values){
    values.Cfop = parseInt(values.Cfop)
    values.tipo = parseInt(values.tipo)
    return submit(values,'post')
}

export function UpdateCfop(values){
    values.Cfop = parseInt(values.Cfop)
    values.tipo = parseInt(values.tipo)
    return submit(values, 'put')
    
}
export function DeleteCfop(values){
    return submit(values, 'delete', values.cfopID)
}

function submit(values,method,CfopID){
    return dispatch => {
        const id = CfopID ? CfopID : ''
        axios[method](`${consts.API_URL}/admin/Cfop/${id}`,values)
            .then(resp => {
                toastr.success('Sucesso', 'Cadastro Realizado com sucesso')
                dispatch(initCfop(values.userID))
            })
            .catch(e => {
                e.response.data.Errors.forEach(error => toastr.error('Ops...', error))
            })
    }
}

function getCfopList(userID){
    const request = axios.get(`${consts.API_URL}/admin/Cfop/${userID}`)
    return{
        type:'CFOP_FETCHED',
        payload: request
    }
}

export function validate(values) {
    const errors = {}
    var Cfop = values.Cfop || []
    if (Cfop.length > 4 || Cfop.length < 4) {
        errors.Cfop = 'CFOP Inválido'
    }
    if (typeof values.tipo == 'undefined'){
        errors.tipo = 'Selecione uma opção'
    }
  
    return errors
}

export function showUpdate(Cfop){
    return[
        showTabs('CfopUpdate'),
        selectTab('CfopUpdate'),
        initialize('Cadcfop',Cfop)
    ]
}

export function showDelete(Cfop){
    return[
        showTabs('CfopDelete'),
        selectTab('CfopDelete'),
        initialize('Cadcfop', Cfop)
        
    ]
}