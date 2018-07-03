import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSubmit } from '../actions/index'
import Form from '../components/Form'

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmit: bindActionCreators(onSubmit, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)