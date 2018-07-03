import { API_DOMEIN } from '../../App/constants/config'
import * as CONST from '../../App/constants/ActionTypes'

export const requestStart = (action) => {
    return {
        type: action,
    }
}

export const requestSuccess = (action, result) => {
    return {
        type: action,
        payload: result
    }
}

export const requestFailure = (action, result) => {
    return {
        type: action,
        payload: result
    }
}

export const reload = (param, url) => {
    return (dispatch, getState) => {
        dispatch(requestStart(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(param),
            mode: 'cors',
        })
            .then((response) => {
                return response.json()
            })
            .then((payload) => {
                dispatch(requestSuccess(CONST.RELOAD_SUCCESS, payload))
                dispatch(requestStart(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.RELOAD_FAILURE, error))
                dispatch(requestStart(CONST.UNLODING))
            })
    }
}

export const dateChangeSuccess = (action, result) => {
    return {
        type: action,
        payload: result,
    }
}

export const setDate = (action, date) => {
    return {
        type: action,
        date
    }
}

export const onDateChange = (param, url) => {
    return (dispatch, getState) => {
        dispatch(setDate(CONST.DATE_SET, param.date))
        dispatch(requestStart(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(param),
            mode: 'cors',
        })
            .then((response) => {
                return response.json()
            })
            .then((payload) => {
                dispatch(dateChangeSuccess(CONST.DATE_CHANGE, payload))
                dispatch(requestStart(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.RELOAD_FAILURE, error))
                dispatch(requestStart(CONST.UNLODING))
            })
    }
}

export const assginWorker = (customerList, workerList) => {
    return {
        type: CONST.ASSIGN_WORKER,
        payload: { customerList, workerList }
    }
}

export const onClickLeft = (param, url) => {
    return (dispatch, getState) => {
        dispatch(requestStart(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(param),
            mode: 'cors',
        })
            .then((response) => {
                return response.json()
            })
            .then((payload) => {
                dispatch(requestSuccess(CONST.ASSIGN_WORKER_SUCCESS, payload))
                dispatch(requestStart(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.ASSIGN_WORKER_FAILURE, error))
                dispatch(requestStart(CONST.UNLODING))
            })
    }
}

export const onClickRight = (param, url) => {
    return (dispatch, getState) => {
        dispatch(requestStart(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(param),
            mode: 'cors',
        })
            .then((response) => {
                return response.json()
            })
            .then((payload) => {
                dispatch(requestSuccess(CONST.UNASSIGN_WORKER_SUCCESS, payload))
                dispatch(requestStart(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.UNASSIGN_WORKER_FAILURE, error))
                dispatch(requestStart(CONST.UNLODING))
            })
    }
}

export default reload
