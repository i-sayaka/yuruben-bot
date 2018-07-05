import * as CONST from '../ActionTypes'

const initialState = {
    query: '',
    ans: '',
    loading: false
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
                    ans:action.payload.topScoringIntent.intent,

                }
            )
        case CONST.REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {}
            )
        // -------------------------------------------------------------------------
        // loading制御
        // -------------------------------------------------------------------------
        case CONST.LODING:
            return Object.assign(
                {},
                state,
                {
                    query: '',
                    ans: '',
                    loading: true

                }
            )
        case CONST.UNLODING:
            return Object.assign(
                {},
                state,
                {loading: false}
            )
        default:
            return state
    }
}

export default bot
