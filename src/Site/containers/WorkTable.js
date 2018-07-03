import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWorkDetail, closeWorkDetailRegModal } from '../actions/Site'
import WorkTable from '../components/WorkTable'

const mapStateToProps = (state, props) => {
    return {
        siteDetail: state.site.siteDetail,
        workDetailRegModalIsOpen: state.work.workDetailRegModalIsOpen,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getWorkDetail: bindActionCreators(getWorkDetail, dispatch),
        closeWorkDetailRegModal: bindActionCreators(closeWorkDetailRegModal, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkTable)
