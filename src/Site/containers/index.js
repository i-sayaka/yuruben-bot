import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    clearState,
    openSiteRegModal,
    closeSiteRegModal,
    closeSiteDetailModal,
    siteRegistration,
    siteUpdate
} from '../actions/Site'
import Site from '../components/index'

const mapStateToProps = (state, props) => {
    return {
        siteRegModalIsOpen: state.site.siteRegModalIsOpen,
        siteDetailModalIsOpen: state.site.siteDetailModalIsOpen,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        openSiteRegModal: bindActionCreators(openSiteRegModal, dispatch),
        closeSiteRegModal: bindActionCreators(closeSiteRegModal, dispatch),
        closeSiteDetailModal: bindActionCreators(closeSiteDetailModal, dispatch),
        siteRegistration: bindActionCreators(siteRegistration, dispatch),
        siteUpdate: bindActionCreators(siteUpdate, dispatch),
        clearState: bindActionCreators(clearState, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Site)
