import axios from 'axios'
import consts from '../consts.js'


export function getDashBoardList(userID) {
    const request = axios.get(`${consts.API_URL}/admin/DashBoard/${userID}`)
    return {
        type: 'DASHBOARD_FETCHED',
        payload: request
    }
}