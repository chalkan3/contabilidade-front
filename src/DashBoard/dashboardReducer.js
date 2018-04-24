const INITIAL_STATE = {
    DashBoardList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DASHBOARD_FETCHED':
            return {
                ...state,
                DashBoardList: action.payload.data
            }
        default:
            return state
    }

}