import * as CONST from '../../App/constants/ActionTypes'

const initialState = {
    loading: false
}

function progress(state = initialState, action) {
    switch (action.type) {
        case CONST.LODING:
            console.log('LODING')
            return Object.assign({}, state, { loading: true })
        case CONST.UNLODING:
            console.log('UNLODING')
            return Object.assign({}, state, { loading: false })
        default:
            return state
    }
}

export default progress
