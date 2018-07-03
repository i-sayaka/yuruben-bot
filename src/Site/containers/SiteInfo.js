import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getClientDetail, siteDelete } from '../actions/Site'
import SiteInfo from '../components/SiteInfo'

const mapStateToProps = (state, props) => {
    return {
        siteDetail: state.site.siteDetail,
        clientDetail: state.site.clientDetail,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        siteDelete: bindActionCreators(siteDelete, dispatch),
        getClientDetail: bindActionCreators(getClientDetail, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SiteInfo)
