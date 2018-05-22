const INITIAL_STATE = {
    NcmList:[]
}


export default (state = INITIAL_STATE, action ) =>{
    switch(action.type){
        case 'NCM_FETCHED_LIST':
            return{
                ...state,
                NcmList: action.payload.data
            }
        default:
            return state
    }
    

}