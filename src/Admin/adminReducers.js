const INITIAL_STATE = {
    usersList: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USERS_FETCHED':
            return {
                ...state,
                usersList: action.payload.data
            }
        case 'ANUIDADE_UPDATED':
            
            return {
                ...state,
                usersList: state.usersList.map(
                    (content,index) => index === action.payload.index ? {...content, Venct: action.payload.Venct} : content
                )
                
            }
        default:
            return state
    }
}