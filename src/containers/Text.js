import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Text from '../components/Text'

const mapStateToProps = (state, props) => {
    return {
        query: state.bot.query,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Text)