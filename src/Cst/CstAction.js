import { showTabs, selectTab } from '../common/tab/tabAction'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'

import consts from '../consts.js'

const INITIAL_VALUES = {}
export function InitCst(userID){
   return[
       showTabs('CstList', 'CstAdd'),
       selectTab('CstList'),
       getCst(userID),
       initialize('cadCst', INITIAL_VALUES)
   ]
}

export function AddCst(values){
    values.cst = parseInt(values.cst)
    values.Formula = parseInt(values.Formula)
    return submit(values,'post')
}
export function UpdateCst(values) {
    values.cst = parseInt(values.cst)
    values.Formula = parseInt(values.Formula)
    return submit(values, 'put')
}

export function DeleteCst(values){
    return submit(values, 'delete', values.cstID)
}

function submit(values, method, cstID) {
    return dispatch => {
        const id = cstID ? cstID : ''
        axios[method](`${consts.API_URL}/admin/Cst/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Cadastro Realizado com sucesso')
                dispatch(InitCst(values.userID))
            })
            .catch(e => {
                e.response.data.Errors.forEach(error => toastr.error('Ops...', error))
            })
    }
}

function getCst(userID){
    const request = axios.get(`${consts.API_URL}/admin/Cst/${userID}`)
    return{
        type:'CST_FETCHED',
        payload:request
    }
}


export function showDelete(Cst){
    return [
        showTabs('CstDelete'),
        selectTab('CstDelete'),
        initialize('cadCst', Cst)
    ]
}
export function showUpdate(Cst){
    return[
        showTabs('CstUpdate'),
        selectTab('CstUpdate'),
        initialize('cadCst', Cst)
    ]
}


export function validate(values){
    console.log(values)
    const errors = {}
    var Cst = values.cst || []
    
    if (Cst.length > 3 || Cst.length < 3){
        errors.cst = 'CST inválido'
    }
    
    if (typeof values.Formula == 'undefined'){
        errors.Formula = 'Selecione uma opção'
    }

    return errors
}