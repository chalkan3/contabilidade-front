import moment from 'moment';


const INITIAL_STATE = {
    formSent: false,
    DateForm: { datai: moment(), dataf: moment() },
    apuracaoList: [],
    loading: false
}


export default (state = INITIAL_STATE, action ) => {

    switch(action.type){
        case 'XML_FORM_SENT':
            return { 
                ...state,
                DateForm:{
                    ...state.DateForm,
                    [action.payload.type]: action.payload.value
                }
            }
        case 'XML_SENT_FORM':
            return{
                ...state,
                formSent: action.payload
            }
        case 'APURACAO_LIST':
            return{
                ...state,
                apuracaoList: action.payload.data
            }
        default:
            return state
    }
}