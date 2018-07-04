import * as CONST from '../ActionTypes'

const initialState = {
    query: '',
    ans: ''
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
                {
                    query:action.payload.query,
                    ans:action.payload.topScoringIntent.intent

                }
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
