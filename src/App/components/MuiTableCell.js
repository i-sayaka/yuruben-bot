import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { capitalize } from '@material-ui/core/utils/helpers'

export const styles = theme => ({
    root: {
        display: 'table-cell',
        verticalAlign: 'inherit',
        borderBottom: '1px solid #E0E0E0',
        textAlign: 'left',
        border: 'solid 1px #E0E0E0',
        overflow: 'hidden',
        padding: 'unset',
        fontSize: '14px',
        paddingRight: '10px',
        fontFamily: 'Roboto',
        '&$selected': {
            borderStyle: 'solid',
            borderColor: '#0710FF',
            borderWidth: '3px'
        },
        '&$yellow': {
            backgroundColor: '#fff585',
        },
        '&$pink': {
            backgroundColor: '#ffbcf3',
        },
        '&$hover:hover': {
            backgroundColor: '#daf4ff'
        },
    },
    head: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: '16px',
        textAlign: 'center',
        paddingLeft: '10px',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
    },
    footer: {
        borderBottom: 0,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(12),
    },
    numeric: {
        textAlign: 'right',
        flexDirection: 'row-reverse',
    },
    paddingDense: {
        paddingRight: theme.spacing.unit * 3,
    },
    paddingCheckbox: {
        padding: '0 12px',
        '&:last-child': {
            paddingRight: 12,
        },
    },
    paddingNone: {
        padding: 0,
        '&:last-child': {
            padding: 0,
        },
    },
    selected: {},
    yellow: {},
    pink: {},
    hover: {},
})

function TableCell(props, context) {
    const {
        children,
        classes,
        className: classNameProp,
        component,
        sortDirection,
        numeric,
        padding,
        scope: scopeProp,
        variant,
        selected,
        yellow,
        pink,
        hover,
        ...other
    } = props
    const { table } = context
    let Component
    if (component) {
        Component = component
    } else {
        Component = table && table.head ? 'th' : 'td'
    }

    let scope = scopeProp
    if (!scope && table && table.head) {
        scope = 'col'
    }

    const className = classNames(
        classes.root,
        {
            [classes.head]: variant ? variant === 'head' : table && table.head,
            [classes.body]: variant ? variant === 'body' : table && table.body,
            [classes.footer]: variant ? variant === 'footer' : table && table.footer,
            [classes.numeric]: numeric,
            [classes[`padding${capitalize(padding)}`]]: padding !== 'default',
            [classes.selected]: table && selected,
            [classes.yellow]: table && yellow,
            [classes.pink]: table && pink,
            [classes.hover]: table && hover,
        },
        classNameProp,
    )

    let ariaSort = null
    if (sortDirection) {
        ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending'
    }

    return (
        <Component className={className} aria-sort={ariaSort} scope={scope} {...other}>
            {children}
        </Component>
    )
}

TableCell.propTypes = {
    classes: PropTypes.object.isRequired,
    numeric: PropTypes.bool,
    padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),
    selected: PropTypes.bool,
    yellow: PropTypes.bool,
    pink: PropTypes.bool,
    hover: PropTypes.bool,
}

TableCell.defaultProps = {
    numeric: false,
    padding: 'default',
    selected: false,
    yellow: false,
    pink: false,
    hover: false,
}

TableCell.contextTypes = {
    table: PropTypes.object.isRequired,
}

export default withStyles(styles, { name: 'MuiTableCell' })(TableCell)
