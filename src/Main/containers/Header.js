import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reload, getWorkDtl, getWorkerDtl } from '../actions/index'
import HeaderComponents from '../components/Header'

function mapStateToProps(state) {
    return {
        modalIsOpen: false,
        date: state.main.date,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: bindActionCreators(reload, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponents)
