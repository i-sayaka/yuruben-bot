import React from 'react'
import { render } from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import { Table, TableHead, TableBody, TableCell, TableRow, Grid } from '@material-ui/core'
import BaseComponent from '../../App/components/Base'
import WorkDetailRegistration from '../../Work/containers/index'


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


class WorkTable extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.classes = props.classes
    }

    /**
     * 行ダブルクリック時の処理
     */
    rowdbClick = (event, id) => {
        this.props.getWorkDetail((`work_details/${id}`))
    }

    /**
     * 作業詳細登録モーダルを閉じる
     */
    closeWorkDetailRegModal() {
        this.props.closeWorkDetailRegModal()
    }

    render() {
        return (
            <div>
                <Grid container className={this.classes.grid}>
                    <Grid item xs={12}>
                        <CustomTable>
                            <TableHead>
                                <CustomTableRow>
                                    <CustomTableCell>No</CustomTableCell>
                                    <CustomTableCell>開始</CustomTableCell>
                                    <CustomTableCell>終了</CustomTableCell>
                                    <CustomTableCell>時間</CustomTableCell>
                                    <CustomTableCell>種別</CustomTableCell>
                                    <CustomTableCell>コード</CustomTableCell>
                                    <CustomTableCell>時給</CustomTableCell>
                                    <CustomTableCell>有効期限</CustomTableCell>
                                    <CustomTableCell>備考</CustomTableCell>
                                </CustomTableRow>
                            </TableHead>
                            {Object.keys(this.props.siteDetail).length === 0 ?
                                // 新規登録の場合
                                '' :
                                // 更新の場合
                                <TableBody>
                                    {this.props.siteDetail.works.map((d) => {
                                        return (
                                            <CustomTableRow
                                                key={d.id}
                                                hover
                                                onDoubleClick={
                                                    event => this.rowdbClick(event, d.id)
                                                }
                                            >
                                                <CustomTableCell>
                                                    {d.id}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.work_start_time}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.work_end_time}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.working_hours}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.contract_amount_category}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.contract_amount_id}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.payout_hourly_wage}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.expiration_date}
                                                </CustomTableCell>
                                                <CustomTableCell>
                                                    {d.note}
                                                </CustomTableCell>
                                            </CustomTableRow>
                                        )
                                    })}
                                </TableBody>
                            }
                        </CustomTable>
                    </Grid>
                </Grid>
                <WorkDetailRegistration
                    modalIsOpen={this.props.workDetailRegModalIsOpen}
                    closeModal={() => this.closeWorkDetailRegModal()}
                />
            </div>
        )
    }
}


export default withStyles(styles)(WorkTable)

