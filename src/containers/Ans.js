import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Ans from '../components/Ans'

const mapStateToProps = (state, props) => {
    return {
        ans: state.bot.ans,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Ans)