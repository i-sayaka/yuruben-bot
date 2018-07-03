import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = theme => ({
    root: {
        color: 'inherit',
        display: 'table-row',
        height: '10px',
        verticalAlign: 'middle',
        outline: 'none',
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&$selected': {
            backgroundColor: '#48a2ff'
        },
        '&$indented': {
            backgroundColor: '#C1C1C1'
        },
        '&$hover:hover': {
            backgroundColor: '#daf4ff'
        },
    },
    selected: {},
    indented: {},
    hover: {},
    head: {
        height: 10,
    },
    footer: {
        height: 10,
    },
})

function TableRow(props, context) {
    const {
        classes,
        className: classNameProp,
        component: Component,
        hover,
        selected,
        indented,
        ...other
    } = props
    const { table } = context

    const className = classNames(
        classes.root,
        {
            [classes.head]: table && table.head,
            [classes.footer]: table && table.footer,
            [classes.hover]: table && hover,
            [classes.selected]: table && selected,
            [classes.indented]: table && indented,
        },
        classNameProp,
    )

    return <Component className={className} {...other} />
}

TableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    hover: PropTypes.bool,
    selected: PropTypes.bool,
    indented: PropTypes.bool
}

TableRow.defaultProps = {
    component: 'tr',
    hover: false,
    selected: false,
    indented: false
}

TableRow.contextTypes = {
    table: PropTypes.object,
}

export default withStyles(styles, { name: 'MuiTableRow' })(TableRow)
