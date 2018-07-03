import React from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import { ChevronLeft, ChevronRight, DateRange } from '@material-ui/icons'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { DatePicker } from 'material-ui-pickers'
import { format, subDays } from 'date-fns'
import theme from '../../App/theme/Theme'

const DatePickerStyle = {
    width: '190px',
    fontSize: '20px',
    background: '#ffeaec',
    fontWeight: 1000
}
const CustomTextField = withStyles(themes => ({
    root: {
        marginLeft: themes.spacing.unit,
        marginRight: themes.spacing.unit,
        width: '100px',
    },
}))(TextField)

class ReservationForms extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {}
        this.onChangeField = this.onChangeField.bind(this)
    }

    onChangeField(e) {
        this.props.onDateChange(e.target.value)
    }

    onReload = (Date) => {
        const param = {
            branch_office_id: 2,
            date: format(Date, 'YYYY-MM-DD')
        }
        this.props.onDateChange(param, 'views/main')
    }

    onDateDecrement = () => {
        this.onReload(subDays(this.props.date, 1))
    }

    onDateIncrement = () => {
        this.onReload(subDays(this.props.date, -1))
    }

    setDateTomorow = () => {
        this.onReload(subDays(new Date(), -1))
    }

    handleDateChange = (date) => {
        this.onReload(date)
    }

    render() {
        const msg = '日付が不正です'
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Grid container wrap="nowrap" spacing={8}>
                        <Grid item xs={4}>
                            <DatePicker
                                keyboard
                                label="日付"
                                format="YYYY/MM/DD (dd)"
                                value={this.props.date}
                                onChange={this.handleDateChange}
                                animateYearScrolling={false}
                                autoOk
                                style={DatePickerStyle}
                                leftArrowIcon={<ChevronLeft />}
                                rightArrowIcon={<ChevronRight />}
                                keyboardIcon={<DateRange />}
                                showTodayButton
                                invalidDateMessage={msg}
                                maxDateMessage={msg}
                                minDateMessage={msg}
                                invalidLabel={this.props.date}
                            />
                            <Button size="small" onClick={this.onDateDecrement}><ChevronLeft size="small" /></Button>
                            <Button onClick={this.setDateTomorow}>明日</Button>
                            <Button size="small" onClick={this.onDateIncrement}><ChevronRight /></Button>
                        </Grid>
                        <Grid item xs={1}>
                            <CustomTextField label="割当数" value={this.props.assigned_count} disabled />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomTextField label="未割当数" value={this.props.unassigned_count} disabled />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomTextField label="支店" value="秋葉原" disabled />
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </div>
        )
    }
}


export default ReservationForms
