import { format, subDays } from 'date-fns'
import * as CONST from '../../App/constants/ActionTypes'

const initialState = {
    loading: false,
    date: format(new Date(), 'YYYY-MM-DD'),
    payload: { work_list: null, worker_list: null, other: {} }
}

function main(state = initialState, action) {
    const obj = Object.assign({}, state)

    switch (action.type) {
        case CONST.DATE_CHANGE:
            return Object.assign({}, state, { payload: action.payload.result })
        case CONST.DATE_SET:
            return Object.assign({}, state, { date: format(action.date, 'YYYY-MM-DD') })

        case CONST.RELOAD_SUCCESS:
            return Object.assign({}, state, { payload: action.payload.result })
        case CONST.RELOAD_FAILURE:
            return Object.assign({}, state, { payload: initialState.payload })

        case CONST.ASSIGN_WORKER_SUCCESS:
            return Object.assign({}, state, { payload: action.payload.result })
        case CONST.ASSIGN_WORKER_FAILURE:
            return Object.assign({}, state, { payload: initialState.payload })

        case CONST.UNASSIGN_WORKER_SUCCESS:
            return Object.assign({}, state, { payload: action.payload.result })
        case CONST.UNASSIGN_WORKER_FAILURE:
            return Object.assign({}, state, { payload: initialState.payload })

        default:
            return state
    }
}

export default main
