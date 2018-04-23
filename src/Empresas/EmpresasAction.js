import { showTabs, selectTab } from '../common/tab/tabAction'
import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import consts from '../consts.js'

const INITIAL_VALUES = {}



export function initEmpresas(userID){
    return[
        showTabs('EmpresaList', 'EmpresaCad'),
        selectTab('EmpresaList'),
        getEmpresasList(userID),
        initialize('Cademp', INITIAL_VALUES)
    ]
}


export function createEmpresa(values){
    
    values.empCnpj = values.empCnpj.replace(".", "");
    values.empCnpj = values.empCnpj.replace(".", "");    
    values.empCnpj = values.empCnpj.replace("-", "");
    values.empCnpj = values.empCnpj.replace("/", "");
    return submit(values,'post')
}

export function updateEmpresa(values){
    values.empCnpj = values.empCnpj.replace(".", "");
    values.empCnpj = values.empCnpj.replace(".", "");
    values.empCnpj = values.empCnpj.replace("-", "");
    values.empCnpj = values.empCnpj.replace("/", "");
    return submit(values, 'put')
}

export function deleteEmpresa(values){
    return submit(values, 'delete', values.empresaID)
}


export function getEmpresasList(userID){
    const request = axios.get(`${consts.API_URL}/admin/cadEmp/${userID}`)
    return{
        type:'EMPRESAS_LIST_FETCHED',
        payload: request
    }
}

function submit(values,method,UtilsID){
    return dispatch => {
        const id = UtilsID ? UtilsID : ''
        
        axios[method](`${consts.API_URL}/admin/cadEmp/${id}`,values)
            .then(resp => {
                toastr.success('Sucesso','Cadastro Realizado com sucesso')
                dispatch(initEmpresas(values.userID))
            })
            .catch(e => {
                e.response.data.Errors.forEach( error => toastr.error('Ops...',error))
            })
    }
}

export function showDelete(empresa){
    return[
        showTabs('EmpresaDelete'),
        selectTab('EmpresaDelete'),
        initialize('Cademp', empresa)
    ]
}

export function showUpdate(empresa){
    return[
        showTabs('EmpresaAtu'),
        selectTab('EmpresaAtu'),
        initialize('Cademp', empresa)
    ]
}

export function validate(values){
    const errors = {}
    if (!values.empInsc) {
        errors.empInsc = 'Incrição Necessário'
    }
    if (!values.empNome){
        errors.empNome = 'Nome Necessário'
    }
    if (!values.empCnpj){
        errors.empCnpj = 'Cnpj Necessário'
    } else if (/(_)/g.test(values.empCnpj)){
        errors.empCnpj = 'O Cnpj Está incompleto'    
    }
    return errors
}