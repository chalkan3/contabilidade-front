const INITIAL_STATE = {
    CstList:[]
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CST_FETCHED':
            return{
                ...state,
                CstList: action.payload.data
            }
        default:
            return state
    }

}