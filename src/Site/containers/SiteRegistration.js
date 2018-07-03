import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearSiteDetail } from '../actions/Site'
import SiteRegistration from '../components/SiteRegistration'

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        clearSiteDetail: bindActionCreators(clearSiteDetail, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SiteRegistration)
