import React from 'react'
import { Grid, Button, TextField, IconButton, MenuItem } from '@material-ui/core'
import { AccessTime } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { TimePicker } from 'material-ui-pickers'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const CustomTextField = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '50px',
    },
}))(TextField)

const CustomButton = withStyles(theme => ({
    root: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginLeft: 16,
    },
}))(Button)

const TimePickerStyle = {
    margin: 8,
    width: '160px',
    fontSize: '20px',
    fontWeight: 1000
}

class WorkForm extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
            work_start_time: new Date(new Date().setHours(0, 0, 0, 0)),
            work_end_time: new Date(new Date().setHours(0, 0, 0, 0)),
            working_hours: 0,
        }
        this.onChangeStartTime = this.onChangeStartTime.bind(this)
        this.onChangeEndTime = this.onChangeEndTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * 開始時刻の値が変更されたときの処理
     * @param time
     */
    onChangeStartTime(time) {
        this.setState({
            work_start_time: time,
            working_hours: (this.state.work_end_time - time) / 60 / 60 / 1000
        })
    }

    /**
     * 終了時刻の値が変更されたときの処理
     * @param time
     */
    onChangeEndTime(time) {
        this.setState({
            work_end_time: time,
            working_hours: (time - this.state.work_start_time) / 60 / 60 / 1000
        })
    }

    /**
     * 登録ボタンが押下されたときの処理
     */
    onSubmit() {
        const param = {
            site_id: this.props.siteDetail.id,
            client_id: this.props.siteDetail.client_id,
            branch_office_id: this.props.siteDetail.branch_office_id,
            work_start_time: format(this.state.work_start_time, 'HH:mm'),
            work_end_time: format(this.state.work_end_time, 'HH:mm'),
            working_hours: this.state.working_hours,
        }
        this.props.workRegistration(param, 'works')
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <TimePicker
                    label="作業時間"
                    style={TimePickerStyle}
                    autoOk
                    keyboard
                    format="A hh:mm"
                    keyboardIcon={<AccessTime />}
                    value={this.state.work_start_time}
                    onChange={time => this.onChangeStartTime(time)}
                />
                ～
                <TimePicker
                    label="　"
                    style={TimePickerStyle}
                    autoOk
                    keyboard
                    format="A hh:mm"
                    keyboardIcon={<AccessTime />}
                    value={this.state.work_end_time}
                    onChange={time => this.onChangeEndTime(time)}
                />
                <CustomTextField
                    value={this.state.working_hours}
                    disabled
                />
                時間
                {Object.keys(this.props.siteDetail).length === 0 ?
                    // 新規登録の場合
                    '' :
                    // 更新の場合
                    <CustomButton
                        variant="outlined"
                        onClick={this.onSubmit}
                    >
                        登録
                    </CustomButton>
                }
            </div>
        )
    }
}


export default WorkForm
