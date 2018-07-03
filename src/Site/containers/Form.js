import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { siteSearch } from '../actions/Site'
import Form from '../components/Form'

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        siteSearch: bindActionCreators(siteSearch, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)
