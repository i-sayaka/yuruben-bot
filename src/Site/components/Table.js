import React from 'react'
import { render } from 'react-dom'
import { Table, TableHead, TableBody, TableCell, TableRow, Grid } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import BaseComponent from '../../App/components/Base'

const CustomTableCell = withStyles(theme => ({
    root: {
        minWidth: '50px',
        border: 'solid 1px #E0E0E0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: 'unset',
        fontSize: '14px',
        paddingRight: '10px'
    },
    head: {
        fontSize: '16px',
        textAlign: 'center',
        paddingLeft: '10px',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}))(TableCell)

const CustomTableCell100 = withStyles(theme => ({
    root: {
        minWidth: '100px',
        border: 'solid 1px #E0E0E0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: 'unset',
        fontSize: '14px',
        paddingRight: '10px'
    },
    head: {
        fontSize: '16px',
        textAlign: 'center',
        paddingLeft: '10px',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        marginTop: '10px'
    }
}))(TableCell)


const CustomTableCell300 = withStyles(theme => ({
    root: {
        minWidth: '300px',
        border: 'solid 1px #E0E0E0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: 'unset',
        fontSize: '14px',
        paddingRight: '10px'
    },
    head: {
        fontSize: '16px',
        textAlign: 'center',
        paddingLeft: '10px',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}))(TableCell)

const CustomTableRow = withStyles(theme => ({
    root: {
        height: '10px',
    }
}))(TableRow)

const CustomTable = withStyles(theme => ({
    root: {
        maxWidth: '10px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        margin: theme.spacing.unit,
    }
}))(Table)

const styles = theme => ({
    grid: {
        overflow: 'scroll',
        height: '490px'
    }
})


class SiteTable extends BaseComponent {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
        }
    }

    /**
     * 行ダブルクリック時の処理
     */
    rowdbClick = (event, id) => {
        this.props.getSiteDetail(`sites/${id}`)
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <Grid container className={this.classes.grid}>
                    <Grid item xs={12}>
                        <CustomTable>
                            <TableHead>
                                <CustomTableRow>
                                    <CustomTableCell>コード</CustomTableCell>
                                    <CustomTableCell300>名称</CustomTableCell300>
                                    <CustomTableCell>支店</CustomTableCell>
                                    <CustomTableCell100>最寄駅</CustomTableCell100>
                                    <CustomTableCell>顧客コード</CustomTableCell>
                                    <CustomTableCell300>顧客名</CustomTableCell300>
                                </CustomTableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.list.map((d) => {
                                    return (
                                        <CustomTableRow
                                            key={d.id}
                                            hover
                                            onDoubleClick={event => this.rowdbClick(event, d.id)}
                                        >
                                            <CustomTableCell>
                                                {d.id}
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                {d.name}
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                {d.branch_offices ? d.branch_offices.name : ''}
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                {d.stations1 ? d.stations1.name : ''}
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                {d.clients ? d.clients.id : ''}
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                {d.clients ? d.clients.name : ''}
                                            </CustomTableCell>
                                        </CustomTableRow>
                                    )
                                })}
                            </TableBody>
                        </CustomTable>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(SiteTable)

