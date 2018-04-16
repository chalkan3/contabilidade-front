const INITIAL_STATE = {
    empresasList: []
}


export default (state = INITIAL_STATE, action ) =>{

    switch(action.type){
        case 'EMPRESAS_LIST_FETCHED':
            return{
                ...state,
                empresasList: action.payload.data
            }
        default:
            return state
    }
    

}