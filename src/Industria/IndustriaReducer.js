const INITIAL_STATE = {ncm: []}


export default (state = INITIAL_STATE , action ) => {
    switch(action.type){
        case 'NCM_UP':
            return{
                ...state,
                ncm: action.payload
            }
        default:
            return state
    }
}