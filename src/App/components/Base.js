import React from 'react'
import _ from 'lodash'

class Base extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const propsDiff = _.isEqual(nextProps, this.props)
        const stateDiff = _.isEqual(nextState, this.state)
        return !(propsDiff && stateDiff)
    }
}

export default Base
