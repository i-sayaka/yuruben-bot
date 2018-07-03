import * as CONST from '../ActionTypes'

const initialState = {
}

function bot(state = initialState, action) {
    switch (action.type) {
        // -------------------------------------------------------------------------
        // Luis呼び出し
        // -------------------------------------------------------------------------
        case CONST.REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {}
            )
        case CONST.REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {}
            )
        default:
            return state
    }
}

export default bot
