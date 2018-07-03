import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onDateChange } from '../actions/index'
import Forms from '../components/Form'

const mapStateToProps = (state) => {
    const { other } = state.main.payload
    let assignedCount = 0
    if (other.assigned_count_denominator && other.assigned_count_numerator) {
        assignedCount = `${other.assigned_count_numerator}/${other.assigned_count_denominator}`
    }
    return {
        unassigned_count: other.unassigned_count || 0,
        assigned_count: assignedCount,
        date: state.main.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDateChange: bindActionCreators(onDateChange, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)

