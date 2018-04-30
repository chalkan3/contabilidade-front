import { showTabs, selectTab } from '../common/tab/tabAction'
import Axios from 'axios';
import consts from '../consts.js'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'


const INITIAL_VALUES = {}

function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    let date = new Date(ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2));
    return date.toJSON()
}

export function InitAdmList(userID,admID){
    return[
        showTabs('AnuidadeList','AnuidadeCreate'),
        selectTab('AnuidadeList'),
        ListUsers(userID,admID),
        initialize('cadUser', INITIAL_VALUES)
    ]
}

export function ListUsers(userID,admID){
    const request =  Axios.get(`${consts.API_URL}/admin/Admin/${userID}/${admID}`)
    return{
        type: 'USERS_FETCHED',
        payload: request
    }
}

export function ChangeUserAnuidade(index,event){
    let obj = {Venct:FormataStringData(event.target.value),index:index}
    return{
        type:'ANUIDADE_UPDATED',
        payload: obj
    }
}

export function Liberar(users,userADM,userID){
    let objLiberar = {
        ...users,
        userADM: userADM,
        AdminUserID: userID
        
    }
    return submit(objLiberar,'put')
}

export function CreateUser(user){
    user.Venct =  FormataStringData(user.Venct)
    return submit(user,'post')
}

function submit(values, method, usersID) {
    return dispatch => {
        const id = usersID ? usersID : ''
        Axios[method](`${consts.API_URL}/admin/Admin/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Cadastro Realizado com sucesso')
                dispatch(InitAdmList(values.AdminUserID,values.userADM))
            })
            .catch(e => {
                e.response.data.Errors.forEach(error => toastr.error('Ops...', error))
            })
    }
}