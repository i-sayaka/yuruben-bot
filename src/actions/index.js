import * as CONST from '../ActionTypes'

export const controlLoading = (typeName) => {
    return {
        type: typeName
    }
}

export const requestSuccess = (typeName, result) => {
    return {
        type: typeName,
        payload: result
    }
}

export const requestFailure = (typeName, result) => {
    return {
        type: typeName,
        payload: result
    }
}

/**
 * Luis呼び出し
 */
export const onSubmit = (url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            mode: 'cors',
        })
            .then((response) => {
                return response.json()
            })
            .then((payload) => {
                dispatch(requestSuccess(CONST.REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}
