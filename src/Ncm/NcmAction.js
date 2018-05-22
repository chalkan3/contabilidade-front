import { showTabs, selectTab } from '../common/tab/tabAction'
import axios from 'axios'
import { reset as resetForm, initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import consts from '../consts.js'
import { getEmpresasList } from '../Empresas/EmpresasAction'


const INITIAL_VALUES = {}
export function GetNcmList(userID,cnpj){
    const request = axios.get(`${consts.API_URL}/admin/Ncm/${userID}/${cnpj}`)
        return{
        type:'NCM_FETCHED_LIST',
        payload: request
    }
}


export function InitNcm(userID){
    return [
        showTabs('NcmList','NcmIncluir'),
        selectTab('NcmList'),
        getEmpresasList(userID),
        initialize('cadNcm',INITIAL_VALUES)
    ]
}

export function AddNcm(values){
    values.Empresa = values.Empresa.empCnpj
    values.Ncm = parseInt(values.Ncm)

    return submit(values,'post')
}

export function UpdateNcm(values){
    values.Empresa = values.Empresa.empCnpj
    values.Ncm = parseInt(values.Ncm)

    return submit(values,'put')
}

export function DeleteNcm(values){
    return submit(values,'delete',values.NcmID)
}


export function showDelete(ncm){
    return[
        showTabs('NcmList','NcmDelete'),
        selectTab('NcmDelete'),
        initialize('cadNcm', ncm)
    ]
}

export function showUpdate(ncm){
    return[
        showTabs('NcmList','NcmEdit'),
        selectTab('NcmEdit'),
        initialize('cadNcm',ncm)
    ]
}


function submit(values,method,NcmID){
    return dispatch => {
        const id  = NcmID ? NcmID : ''
        axios[method](`${consts.API_URL}/admin/Ncm/${id}`,values)
            .then(resp => {
                toastr.success('Sucesso','Ncm Salvo/Atualizado')
                dispatch(InitNcm(values.UserID))
            })
            .catch(e => {
                e.response.data.Errors.forEach(error => toastr.error('Ops...', error))
            })
    }

}



export function validate(values) {
    const errors = {}
    if (!values.Ncm ) {
        errors.Ncm = 'Ncm é necessário '
    }else if(values.Ncm.length > 8 || values.Ncm.length < 8){
        errors.Ncm = 'Ncm invalido '
        
    }

    if(!values.Empresa){
        errors.Empresa = 'Selecione uma opção!'
    }

    return errors
}

