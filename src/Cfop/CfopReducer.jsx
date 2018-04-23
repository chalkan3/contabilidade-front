const INITIAL_STATE = {
    CfopList:[]
}


export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'CFOP_FETCHED':
            return{
                ...state,
                CfopList: action.payload.data
            }
        default:
            return state
    }
}