import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import CustomerTable from './CustomerTable'
import WorkerTable from './WorkerTable'

const styles = theme => ({
    container: {
        height: '635px',
    },
    grid: {
        overflow: 'scroll',
        height: '100%',
        width: '99%'
    },
    item: {
        textAlign: 'center'
    },
    button: {
        marginTop: '150px',
        minWidth: '10px',
        width: '10px',
        height: '80px',
        padding: '10px'
    }
})

const CustomGrid = withStyles(theme => ({
    item: {
        flexBasis: '10px',
        padding: '0px',
        marginLeft: '-15px'
    }
}))(Grid)

const CustomGrid70 = withStyles(theme => ({
    item: {
        minWidth: '60%',
        maxWidth: '66%',
    }
}))(Grid)

const CustomGrid30 = withStyles(theme => ({
    item: {
        maxWidth: '32%',
    }
}))(Grid)

class ReservationTables extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
            selectedCustomer: {},
            selectedWorkers: [],
            selectedCell: null
        }
    }

    onClickLeft = () => {
        let param = {}
        const workerList = []
        const Customer = Object.assign(this.state.selectedCustomer)
        const Worker = Object.assign(this.state.selectedWorkers)

        if (!Customer.work_id) {
            return
        }

        if (!Worker.worker_id) {
            return
        }

        if (Customer.reservation_div === 'dayTime' || Customer.reservation_div === 'otherBranchDayTime') {
            workerList.push(Worker.reservation_id)
        } else if (Customer.reservation_div === 'nightTime' || Customer.reservation_div === 'otherBranchNightTime') {
            workerList.push(Worker.reservation_id_night)
        } else {
            workerList.push(Worker.reservation_id)
        }

        param = {
            id: workerList,
            work_detail_id: Customer.id,
            // TODO ログインユーザの支店IDを送る
            branch_office_id: 2,
            preferred_date: this.props.date
        }
        this.props.onClickLeft(param, 'main/assign')
    }

    onClickRight = () => {
        let param = {}
        const workerList = []
        const Customer = Object.assign(this.state.selectedCustomer)
        if (!Customer.work_id) {
            return
        }
        if (this.state.selectedCell.indexOf('worker') === 0) {
            const index = this.state.selectedCell.slice(6, 7)
            const reservationId = Customer[`workerInfo${index}`].reservation_id || null
            if (!reservationId) {
                return
            }
            // TODO 他支店の割当て解除はできない旨のアラートを表示する
            if (Customer.branch_office_id !== 2) {
                alert('(仮アラート)他支店の解除不可です')
                return
            }
            workerList.push(reservationId)
            param = {
                id: workerList,
                work_detail_id: Customer.id,
                // TODO ログインユーザの支店IDを送る
                branch_office_id: 2,
                preferred_date: this.props.date
            }
            this.props.onClickRight(param, 'main/unassign')
        }
    }

    updateWorkerState = (state) => {
        this.setState({ selectedWorkers: state.selectedWorkers })
    }

    updateCustomerRowState = (state) => {
        this.setState({ selectedCustomer: state.selectedCustomer })
    }

    updateCustomerCellState = (state) => {
        this.setState({ selectedCell: state.selectedCell })
    }

    render() {
        return (
            <div>
                <Grid container spacing={8} className={this.classes.container}>
                    <CustomGrid70 item xs={8}>
                        <Grid container spacing={8} className={this.classes.grid}>
                            <Grid item>
                                <CustomerTable
                                    updateCustomerRowState={this.updateCustomerRowState}
                                    updateCustomerCellState={this.updateCustomerCellState}
                                    data={this.props.worksList}
                                />
                            </Grid>
                        </Grid>
                    </CustomGrid70>
                    <CustomGrid item xs={1}>
                        <Grid container>
                            <Grid item xs={12} className={this.classes.item}>
                                <Button
                                    variant="outlined"
                                    className={this.classes.button}
                                    onClick={this.onClickLeft}
                                >
                                    <ChevronLeft />
                                </Button>
                            </Grid>
                            <Grid item xs={12} className={this.classes.item}>
                                <Button
                                    variant="outlined"
                                    className={this.classes.button}
                                    onClick={this.onClickRight}
                                >
                                    <ChevronRight />
                                </Button>
                            </Grid>
                        </Grid>
                    </CustomGrid>
                    <CustomGrid30 item xs={3} >
                        <Grid container spacing={8} className={this.classes.grid}>
                            <Grid item>
                                <WorkerTable
                                    updateWorkerState={this.updateWorkerState}
                                    data={this.props.workerList}
                                />
                            </Grid>
                        </Grid>
                    </CustomGrid30>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ReservationTables)
