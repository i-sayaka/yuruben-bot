import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableHead, TableBody, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import BaseComponent from '../../App/components/Base'
import MuiTableRow from '../../App/components/MuiTableRow'
import MuiTableCell from '../../App/components/MuiTableCell'

const CustomTableCell15 = withStyles(theme => ({
    root: {
        minWidth: '10px',
        maxWidth: '10px',
        textAlign: 'center',
        paddingRight: '5px',
    },
    head: {
        paddingLeft: '1px',
    },
}))(MuiTableCell)

const CustomTableCell70 = withStyles(theme => ({
    root: {
        minWidth: '70px',
        maxWidth: '70px',
    }
}))(MuiTableCell)

const CustomTableCell60 = withStyles(theme => ({
    root: {
        minWidth: '60px',
        maxWidth: '60px',
    }
}))(MuiTableCell)

const CustomTableCell80 = withStyles(theme => ({
    root: {
        minWidth: '120px',
        maxWidth: '120px',
    }
}))(MuiTableCell)

const CustomTableRow = withStyles(theme => ({
    root: {}
}))(MuiTableRow)

const CustomTable = withStyles(theme => ({
    root: {
        maxWidth: '20%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'scroll',
    }
}))(Table)

const CustomTooltip = withStyles(theme => ({
    open: {
        fontSize: '18px'
    }
}))(Tooltip)

class CustomerTable extends BaseComponent {
    constructor(props) {
        super(props)
        this.classes = props.classes

        this.state = {
            selectedRow: { id: -1 },
            selectedCell: null
        }
    }

    rowClick = (event, row) => {
        this.setState({ selectedRow: row })
        this.props.updateWorkerState({ selectedWorkers: row })
    }

    cellClick = (cell) => {
        this.setState({ selectedCell: cell })
    }

    isSelectedRow = (id) => {
        return this.state.selectedRow.id !== -1 && this.state.selectedRow.id === id
    }

    isSelectedCell = (id) => {
        return this.state.selectedCell !== null && this.state.selectedCell === id
    }

    isReservationCell = (obj) => {
        return obj.temp_reservation === '1'
    }

    render() {
        return (
            <CustomTable>
                <TableHead>
                    <CustomTableRow>
                        <CustomTableCell60>氏名</CustomTableCell60>
                        <CustomTableCell15 />
                        <CustomTableCell15>昼</CustomTableCell15>
                        <CustomTableCell15>夜</CustomTableCell15>
                        <CustomTableCell70>用具</CustomTableCell70>
                        <CustomTableCell70>最寄駅</CustomTableCell70>
                        <CustomTableCell80>予約備考</CustomTableCell80>
                        <MuiTableCell>コード</MuiTableCell>
                        <MuiTableCell>携帯電話番号</MuiTableCell>
                        <MuiTableCell>電話番号</MuiTableCell>
                        <MuiTableCell>支店</MuiTableCell>
                        <MuiTableCell>出勤数</MuiTableCell>
                        <MuiTableCell>希望職種</MuiTableCell>
                    </CustomTableRow>
                </TableHead>
                <TableBody>

                    {this.props.data.map((d, idx) => {
                        return (
                            <CustomTableRow
                                onClick={event => this.rowClick(event, d)}
                                key={d.id}
                                selected={this.isSelectedRow(d.id)}
                            >
                                <CustomTableCell60
                                    hover
                                    yellow={this.isReservationCell(d)}
                                >
                                    {d.full_name}
                                </CustomTableCell60>
                                <CustomTableCell15 hover>
                                    {d.worker_situations_name}
                                </CustomTableCell15>
                                <CustomTableCell15 hover>
                                    {d.reservation_time_day}
                                </CustomTableCell15>
                                <CustomTableCell15 hover>
                                    {d.reservation_time_night}
                                </CustomTableCell15>
                                <CustomTableCell70 hover>
                                    {d.tools}
                                </CustomTableCell70>
                                <CustomTableCell70 hover>
                                    {d.stations1_name}
                                </CustomTableCell70>
                                <CustomTableCell80 hover>
                                    {d.note}
                                </CustomTableCell80>
                                <MuiTableCell hover>
                                    {d.worker_id}
                                </MuiTableCell>
                                <MuiTableCell hover>
                                    {d.mobile_phone}
                                </MuiTableCell>
                                <MuiTableCell hover>
                                    {d.phone}
                                </MuiTableCell>
                                <MuiTableCell hover>
                                    {d.branch_offices}
                                </MuiTableCell>
                                <MuiTableCell hover>
                                    {d.attendance}
                                </MuiTableCell>
                                <MuiTableCell hover>
                                    {d.desired_job_type}
                                </MuiTableCell>
                            </CustomTableRow>
                        )
                    })}
                </TableBody>
            </CustomTable>
        )
    }
}


export default CustomerTable

