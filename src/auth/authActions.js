import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts.js'

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.Errors.forEach(element => {
                    toastr.error('error', element)
                });
                
            })
    }
}

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/admin/login`)
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
    
}



export function contatoNovo(values){
    axios.post(`${consts.OAPI_URL}/admin/contato`,values)
    toastr.success('Sucesso','Foi enviado um e-mail para nossos especialistas. Logo iremos entrar em contato com você')
    
}


export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.API_URL}/admin/login/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.Valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}