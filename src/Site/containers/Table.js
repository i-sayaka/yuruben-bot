import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSiteDetail } from '../actions/Site'
import SiteTable from '../components/Table'

const mapStateToProps = (state, props) => {
    return {
        list: state.site.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getSiteDetail: bindActionCreators(getSiteDetail, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SiteTable)
