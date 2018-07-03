import React from 'react'
import Tooltip from 'react-tooltip'
import { Table, TableHead, TableBody } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import BaseComponent from '../../App/components/Base'
import MuiTableRow from '../../App/components/MuiTableRow'
import MuiTableCell from '../../App/components/MuiTableCell'

const CustomTableCell10 = withStyles(theme => ({
    root: {
        minWidth: '25px',
        maxWidth: '25px',
        paddingRight: '5px',
    },
    head: {
        paddingLeft: '1px',
    },
}))(MuiTableCell)

const CustomTableCell50 = withStyles(theme => ({
    root: {
        minWidth: '50px',
        maxWidth: '50px',
    }
}))(MuiTableCell)

const CustomTableCell70 = withStyles(theme => ({
    root: {
        minWidth: '70px',
        maxWidth: '70px',
    }
}))(MuiTableCell)

const CustomTableCell90 = withStyles(theme => ({
    root: {
        minWidth: '90px',
        maxWidth: '90px',
    }
}))(MuiTableCell)

const CustomTableCell130 = withStyles(theme => ({
    root: {
        minWidth: '130px',
        maxWidth: '130px',
    }
}))(MuiTableCell)

const CustomTableRow = withStyles(theme => ({
    root: {},
}))(MuiTableRow)

const CustomTable = withStyles(theme => ({
    root: {
        maxWidth: '10px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
}))(Table)

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
        this.props.updateCustomerRowState({
            selectedCustomer: row,
        })
    }

    cellClick = (cell) => {
        this.setState({ selectedCell: cell })
        this.props.updateCustomerCellState({
            selectedCell: cell
        })
    }

    isSelectedRow = (id) => {
        return this.state.selectedRow.id !== -1 && this.state.selectedRow.id !== '' && this.state.selectedRow.id === id
    }

    isSelectedCell = (id) => {
        return this.state.selectedCell !== null && this.state.selectedRow.id !== '' && this.state.selectedCell === id
    }

    isIndentedRow = (id) => {
        return id === ''
    }

    isReservationCell = (obj) => {
        return obj.temp_reservation === '1' && !obj.attendance_confirmation
    }

    render() {
        return (
            <CustomTable>
                <TableHead>
                    <CustomTableRow>
                        <CustomTableCell90>顧客名</CustomTableCell90>
                        <CustomTableCell70>最寄駅</CustomTableCell70>
                        <CustomTableCell130>現場名</CustomTableCell130>
                        <CustomTableCell90>作業時間</CustomTableCell90>
                        <CustomTableCell50>用具</CustomTableCell50>
                        <CustomTableCell10>全社</CustomTableCell10>
                        <CustomTableCell10>支店</CustomTableCell10>
                        <CustomTableCell70 />
                        <CustomTableCell70 />
                        <CustomTableCell70 />
                        <CustomTableCell70 />
                    </CustomTableRow>
                </TableHead>
                <TableBody>

                    {this.props.data.map((d, idx) => {
                        return (

                            <CustomTableRow
                                onClick={event => this.rowClick(event, d)}
                                key={`row-${idx}-${d.id}`}
                                selected={this.isSelectedRow(d.id)}
                                indented={this.isIndentedRow(d.id)}
                            >
                                <CustomTableCell90
                                    hover
                                    onClick={() => this.cellClick(`client_name-${d.id}`)}
                                    selected={this.isSelectedCell(`client_name-${d.id}`)}
                                    data-tip={d.clients_name}
                                    data-for={`clients_name-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.clients_display_name}
                                    <Tooltip id={`clients_name-${idx}-${d.id}`} />
                                </CustomTableCell90>
                                <CustomTableCell70
                                    hover
                                    onClick={() => this.cellClick(`nearest_station_name-${d.id}`)}
                                    selected={this.isSelectedCell(`nearest_station_name-${d.id}`)}
                                    data-tip={d.stations1_name}
                                    data-for={`nearest_station_name-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.stations1_name}
                                    <Tooltip id={`nearest_station_name-${idx}-${d.id}`} />
                                </CustomTableCell70>


                                <CustomTableCell130
                                    hover
                                    onClick={() => this.cellClick(`site_name-${d.id}`)}
                                    selected={this.isSelectedCell(`site_name-${d.id}`)}
                                    data-tip={d.sites_name}
                                    data-for={`site_name-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.sites_name}
                                    <Tooltip id={`site_name-${idx}-${d.id}`} />
                                </CustomTableCell130>
                                <CustomTableCell90
                                    hover
                                    onClick={() => this.cellClick(`working_hours-${d.id}`)}
                                    selected={this.isSelectedCell(`working_hours-${d.id}`)}
                                    data-tip={d.work_time}
                                    data-for={`working_hours-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.work_time}
                                    <Tooltip id={`working_hours-${idx}-${d.id}`} />
                                </CustomTableCell90>
                                <CustomTableCell50
                                    hover
                                    onClick={() => this.cellClick(`site_tools_name-${d.id}`)}
                                    selected={this.isSelectedCell(`site_tools_name-${d.id}`)}
                                    data-tip={d.site_tools}
                                    data-for={`site_tools_name-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.site_tools}
                                    <Tooltip id={`site_tools_name-${idx}-${d.id}`} />
                                </CustomTableCell50>
                                <CustomTableCell10
                                    hover
                                    onClick={() => this.cellClick(`all_office-${d.id}`)}
                                    id={d.id}
                                >
                                    {d.all_office}
                                </CustomTableCell10>
                                <CustomTableCell10
                                    hover
                                    onClick={() => this.cellClick(`branch_office-${d.id}`)}
                                    id={d.id}
                                >
                                    {d.branch_office}
                                </CustomTableCell10>

                                <CustomTableCell70
                                    hover
                                    onClick={() => this.cellClick(`worker1-${d.id}`)}
                                    selected={this.isSelectedCell(`worker1-${d.id}`)}
                                    yellow={this.isReservationCell(d.workerInfo1)}
                                    pink={!!d.workerInfo1.attendance_confirmation}
                                    data-tip={d.workerInfo1.tooltip}
                                    data-for={`worker1-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.workerInfo1.worker}
                                    <Tooltip id={`worker1-${idx}-${d.id}`} />
                                </CustomTableCell70>

                                <CustomTableCell70
                                    hover
                                    onClick={() => this.cellClick(`worker2-${d.id}`)}
                                    selected={this.isSelectedCell(`worker2-${d.id}`)}
                                    yellow={this.isReservationCell(d.workerInfo2)}
                                    pink={!!d.workerInfo2.attendance_confirmation}
                                    data-tip={d.workerInfo2.tooltip}
                                    data-for={`worker2-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.workerInfo2.worker}
                                    <Tooltip id={`worker2-${idx}-${d.id}`} />
                                </CustomTableCell70>
                                <CustomTableCell70
                                    hover
                                    onClick={() => this.cellClick(`worker3-${d.id}`)}
                                    selected={this.isSelectedCell(`worker3-${d.id}`)}
                                    yellow={this.isReservationCell(d.workerInfo3)}
                                    pink={!!d.workerInfo3.attendance_confirmation}
                                    data-tip={d.workerInfo3.tooltip}
                                    data-for={`worker3-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.workerInfo3.worker}
                                    <Tooltip id={`worker3-${idx}-${d.id}`} />
                                </CustomTableCell70>
                                <CustomTableCell70
                                    hover
                                    onClick={() => this.cellClick(`worker4-${d.id}`)}
                                    selected={this.isSelectedCell(`worker4-${d.id}`)}
                                    yellow={this.isReservationCell(d.workerInfo4)}
                                    pink={!!d.workerInfo4.attendance_confirmation}
                                    data-tip={d.workerInfo4.tooltip}
                                    data-for={`worker4-${idx}-${d.id}`}
                                    data-class="extraClass"
                                    data-place="bottom"
                                >
                                    {d.workerInfo4.worker}
                                    <Tooltip id={`worker4-${idx}-${d.id}`} />
                                </CustomTableCell70>
                            </CustomTableRow>
                        )
                    })}
                </TableBody>
            </CustomTable>
        )
    }
}


export default CustomerTable

