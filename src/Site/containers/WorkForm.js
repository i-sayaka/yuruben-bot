import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { workRegistration } from '../actions/Site'
import WorkForm from '../components/WorkForm'

const mapStateToProps = (state, props) => {
    return {
        siteDetail: state.site.siteDetail,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        workRegistration: bindActionCreators(workRegistration, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkForm)
