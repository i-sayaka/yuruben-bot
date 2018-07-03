import { API_DOMEIN } from '../../App/constants/config'
import * as CONST from '../../App/constants/ActionTypes'

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
 * 現場検索
 */
export const siteSearch = (param, url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
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
                dispatch(requestSuccess(CONST.SITE_SEARCH_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.SITE_SEARCH_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 現場詳細取得
 */
export const getSiteDetail = (url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
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
                dispatch(requestSuccess(CONST.GET_SITE_DETAIL_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.GET_SITE_DETAIL_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 顧客詳細取得
 */
export const getClientDetail = (url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
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
                dispatch(requestSuccess(CONST.GET_CLIENT_DETAIL_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.GET_CLIENT_DETAIL_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 現場登録
 */
export const siteRegistration = (param, url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
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
                dispatch(requestSuccess(CONST.SITE_REG_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.SITE_REG_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 現場更新
 */
export const siteUpdate = (param, url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
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
                dispatch(requestSuccess(CONST.SITE_UPD_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.SITE_UPD_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 現場削除
 */
export const siteDelete = (url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
            method: 'DELETE',
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
                dispatch(requestSuccess(CONST.SITE_DEL_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.SITE_DEL_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 作業登録
 */
export const workRegistration = (param, url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
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
                dispatch(requestSuccess(CONST.WORK_REG_REQUEST_SUCCESS, payload))
                // 登録後現場詳細再取得
                dispatch(getSiteDetail(`sites/${param.site_id}`))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.WORK_REG_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 作業詳細取得
 */
export const getWorkDetail = (url) => {
    return (dispatch, getState) => {
        dispatch(controlLoading(CONST.LODING))
        return fetch(`https://${API_DOMEIN}/${url}`, {
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
                dispatch(requestSuccess(CONST.GET_WORK_DETAIL_REQUEST_SUCCESS, payload))
                dispatch(controlLoading(CONST.UNLODING))
            })
            .catch((error) => {
                dispatch(requestFailure(CONST.GET_WORK_DETAIL_REQUEST_FAILURE, error))
                dispatch(controlLoading(CONST.UNLODING))
            })
    }
}

/**
 * 現場登録モーダルをオープンする
 */
export const openSiteRegModal = () => {
    return {
        type: CONST.OPEN_SITE_REG_MODAL
    }
}

/**
 * 現場登録モーダルをクローズする
 */
export const closeSiteRegModal = () => {
    return {
        type: CONST.CLOSE_SITE_REG_MODAL
    }
}

/**
 * 現場詳細モーダルをクローズする
 */
export const closeSiteDetailModal = () => {
    return {
        type: CONST.CLOSE_SITE_DETAIL_MODAL
    }
}

/**
 * 作業詳細登録モーダルをクローズする
 */
export const closeWorkDetailRegModal = () => {
    return {
        type: CONST.CLOSE_WORK_DETAIL_REG_MODAL
    }
}


/**
 * stateを初期化する
 */
export const clearState = () => {
    return {
        type: CONST.CLEAR_SITE_STATE
    }
}

/**
 * siteDetailを初期化する
 */
export const clearSiteDetail = () => {
    return {
        type: CONST.CLEAR_SITE_DETAIL
    }
}
