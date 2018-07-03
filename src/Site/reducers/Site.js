import * as CONST from '../../App/constants/ActionTypes'

const initialState = {
    list: [],
    siteDetail: {},
    clientDetail: {},
    siteRegModalIsOpen: false,
    siteDetailModalIsOpen: false,
}

function site(state = initialState, action) {
    switch (action.type) {
        // -------------------------------------------------------------------------
        // 現場検索処理
        // -------------------------------------------------------------------------
        case CONST.SITE_SEARCH_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                { list: action.payload.result }
            )
        case CONST.SITE_SEARCH_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                { list: [] }
            )
        // -------------------------------------------------------------------------
        // 現場詳細取得処理
        // -------------------------------------------------------------------------
        case CONST.GET_SITE_DETAIL_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    siteDetail: action.payload.result,
                    clientDetail: action.payload.result.clients,
                    siteDetailModalIsOpen: true
                }
            )
        case CONST.GET_SITE_DETAIL_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    siteDetail: {}
                }
            )
        // -------------------------------------------------------------------------
        // 顧客詳細取得処理
        // -------------------------------------------------------------------------
        case CONST.GET_CLIENT_DETAIL_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    clientDetail: action.payload.result,
                }
            )
        case CONST.GET_CLIENT_DETAIL_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    clientDetail: {}
                }
            )
        // -------------------------------------------------------------------------
        // 現場登録処理
        // -------------------------------------------------------------------------
        case CONST.SITE_REG_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    siteRegModalIsOpen: false,
                }
            )
        case CONST.SITE_REG_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    siteRegModalIsOpen: false,
                }
            )
        // -------------------------------------------------------------------------
        // 現場更新処理
        // -------------------------------------------------------------------------
        case CONST.SITE_UPD_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    siteDetailModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        case CONST.SITE_UPD_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    siteDetailModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        // -------------------------------------------------------------------------
        // 現場削除処理
        // -------------------------------------------------------------------------
        case CONST.SITE_DEL_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    siteDetailModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        case CONST.SITE_DEL_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    siteDetailModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        // -------------------------------------------------------------------------
        // 作業登録処理
        // -------------------------------------------------------------------------
        case CONST.WORK_REG_REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                }
            )
        case CONST.WORK_REG_REQUEST_FAILURE:
            return Object.assign(
                {},
                state,
                {
                }
            )
        // -------------------------------------------------------------------------
        // 現場登録モーダルオープン
        // -------------------------------------------------------------------------
        case CONST.OPEN_SITE_REG_MODAL:
            return Object.assign(
                {},
                state,
                {
                    siteRegModalIsOpen: true
                }
            )
        // -------------------------------------------------------------------------
        // 現場登録モーダルクローズ
        // -------------------------------------------------------------------------
        case CONST.CLOSE_SITE_REG_MODAL:
            return Object.assign(
                {},
                state,
                {
                    siteRegModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        // -------------------------------------------------------------------------
        // 現場詳細モーダルクローズ
        // -------------------------------------------------------------------------
        case CONST.CLOSE_SITE_DETAIL_MODAL:
            return Object.assign(
                {},
                state,
                {
                    siteDetailModalIsOpen: false,
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        // -------------------------------------------------------------------------
        // stateの初期化
        // -------------------------------------------------------------------------
        case CONST.CLEAR_SITE_STATE:
            return Object.assign(
                {},
                state,
                {
                    list: [],
                    siteDetail: {},
                    clientDetail: {},
                    siteRegModalIsOpen: false,
                    siteDetailModalIsOpen: false,
                }
            )
        // -------------------------------------------------------------------------
        // siteDetailの初期化
        // -------------------------------------------------------------------------
        case CONST.CLEAR_SITE_DETAIL:
            return Object.assign(
                {},
                state,
                {
                    siteDetail: {},
                    clientDetail: {},
                }
            )
        default:
            return state
    }
}

export default site
