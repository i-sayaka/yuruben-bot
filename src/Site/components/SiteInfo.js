import React from 'react'
import { Grid, Button, TextField, MenuItem, Card, Typography, Chip, FormControlLabel, Checkbox, InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { KEY_CODE_ENTER } from '../../App/constants/config'
import BaseComponent from '../../App/components/Base'

const CustomTextField = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '100px',
    },
}))(TextField)

const CustomTextField60 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '60px',
    },
}))(TextField)

const CustomTextField200 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '200px',
    },
}))(TextField)

const CustomTextField400 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '400px',
    },
}))(TextField)

const CustomTextField600 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '600px',
    },
}))(TextField)

const DisabledTextField = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '100px',
        backgroundColor: '#f5f5f5',
    },
}))(TextField)

const DisabledTextField200 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '200px',
        backgroundColor: '#f5f5f5',
    },
}))(TextField)

const DisabledTextField600 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '600px',
        backgroundColor: '#f5f5f5',
    },
}))(TextField)

const CustomCard = withStyles(theme => ({
    root: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 16,
        marginBottom: 24,
        padding: theme.spacing.unit,
    },
}))(Card)

const CustomButton = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        float: 'right',
    },
}))(Button)

const CustomFormControlLabel = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
    },
}))(FormControlLabel)

const styles = theme => ({
    scrollArea: {
        marginTop: theme.spacing.unit,
        overflow: 'auto',
        maxHeight: 500,
    },
})

// 支店選択用リスト
const branchs = [
    {
        value: 2,
        label: '秋葉原',
    }
]

class SiteInfo extends BaseComponent {
    constructor(props) {
        super(props)
        this.classes = props.classes
        if (Object.keys(props.siteDetail).length === 0) {
            // 新規登録の場合
            this.state = {
                id: '',
                name: '',
                client_id: '',
                prefecture: '',
                city: '',
                address: '',
                nearest_station_id_1: '',
                nearest_station_id_2: '',
                nearest_station_id_3: '',
                work_content: '',
                note: '',
                commuting_allowance: 0,
                separate_transportation_fee: 0,
                separate_transportation_way: false,
                staff_id: '',
                branch_office_id: 2,
                accounting_note: '',
                disable_flag: false,
                site_tools: [],
            }
        } else {
            // 更新の場合
            this.state = {
                id: props.siteDetail.id === null ? '' : props.siteDetail.id,
                name: props.siteDetail.name === null ? '' : props.siteDetail.name,
                client_id: props.siteDetail.client_id === null ? '' : props.siteDetail.client_id,
                prefecture: props.siteDetail.prefecture === null ? '' : props.siteDetail.prefecture,
                city: props.siteDetail.city === null ? '' : props.siteDetail.city,
                address: props.siteDetail.address === null ? '' : props.siteDetail.address,
                nearest_station_id_1: props.siteDetail.stations1 === null ? '' : props.siteDetail.stations1.id,
                nearest_station_id_2: props.siteDetail.stations2 === null ? '' : props.siteDetail.stations2.id,
                nearest_station_id_3: props.siteDetail.stations3 === null ? '' : props.siteDetail.stations3.id,
                work_content: props.siteDetail.work_content === null ? '' : props.siteDetail.work_content,
                note: props.siteDetail.note === null ? '' : props.siteDetail.note,
                commuting_allowance: props.siteDetail.commuting_allowance,
                separate_transportation_fee: props.siteDetail.separate_transportation_fee,
                separate_transportation_way: props.siteDetail.separate_transportation_way === '1',
                staff_id: props.siteDetail.staff_id === null ? '' : props.siteDetail.staff_id,
                branch_office_id: props.siteDetail.branch_office_id,
                accounting_note: props.siteDetail.accounting_note === null ? '' : props.siteDetail.accounting_note,
                disable_flag: props.siteDetail.disable_flag === '1',
                site_tools: [],
            }
        }
        this.onChangeField = this.onChangeField.bind(this)
        this.onCheckedDisabledFlg = this.onCheckedDisabledFlg.bind(this)
        this.onCheckedSepTranWay = this.onCheckedSepTranWay.bind(this)
    }

    /**
     * コンポーネントマウント時の処理
     */
    componentWillMount() {
        this.eventHandler = this.onEnterClientId.bind(this)
        document.body.addEventListener('keydown', this.eventHandler)
    }

    /**
     * コンポーネント破棄時の処理
     */
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.eventHandler)
    }

    /**
     * フィールドの値が変更されたときの処理
     * @param e
     */
    onChangeField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * 無効フラグのチェックボックスの値が変更されたときの処理
     */
    onCheckedDisabledFlg() {
        this.setState({ disable_flag: !this.state.disable_flag })
    }

    /**
     * 別途交通手段のチェックボックスの値が変更されたときの処理
     */
    onCheckedSepTranWay() {
        this.setState({ separate_transportation_way: !this.state.separate_transportation_way })
    }

    /**
     * 登録/更新ボタンが押下されたときの処理
     */
    onSubmit() {
        const temp = {
            id: this.state.id,
            name: this.state.name,
            client_id: this.state.client_id,
            prefecture: this.state.prefecture,
            city: this.state.city,
            address: this.state.address,
            nearest_station_id_1: this.state.nearest_station_id_1,
            nearest_station_id_2: this.state.nearest_station_id_2,
            nearest_station_id_3: this.state.nearest_station_id_3,
            work_content: this.state.work_content,
            note: this.state.note,
            commuting_allowance: this.state.commuting_allowance,
            separate_transportation_fee: this.state.separate_transportation_fee,
            separate_transportation_way: this.state.separate_transportation_way === true ? '1' : '0',
            staff_id: this.state.staff_id,
            branch_office_id: this.state.branch_office_id,
            accounting_note: this.state.accounting_note,
            disable_flag: this.state.disable_flag === true ? '1' : '0',
        }

        const param = {}
        Object.keys(temp).forEach((k) => {
            if (temp[k] !== '') {
                param[k] = temp[k]
            }
        })
        this.props.onSubmit(param)
    }

    /**
     * 削除ボタンが押下されたときの処理
     */
    onDelete() {
        this.props.siteDelete(`sites/${this.state.id}`)
    }

    /**
     * クライアントIDのテキストエリアででエンターキーが押下されたときの処理
     */
    onEnterClientId = (e) => {
        if (document.activeElement.id === 'client_id' && e.keyCode === KEY_CODE_ENTER) {
            this.props.getClientDetail(`clients/${this.state.client_id}`)
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <div className={classes.scrollArea}>
                    {/* 顧客情報エリア */}
                    <CustomCard>
                        <Grid container>
                            <Grid>
                                <CustomTextField
                                    label="顧客コード"
                                    value={this.state.client_id}
                                    name="client_id"
                                    id="client_id"
                                    onChange={this.onChangeField}
                                />
                            </Grid>
                            <Grid>
                                <Grid container>
                                    <DisabledTextField200
                                        label="顧客フリガナ"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null ?
                                                '' : this.props.clientDetail.name
                                        }
                                        disabled
                                    />
                                    <DisabledTextField600
                                        label="住所"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null ?
                                                '' :
                                                this.props.clientDetail.prefecture +
                                                this.props.clientDetail.city +
                                                this.props.clientDetail.address
                                        }
                                        disabled
                                    />
                                </Grid>
                                <Grid container>
                                    <DisabledTextField200
                                        label="電話番号"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null ?
                                                '' : this.props.clientDetail.phone
                                        }
                                        disabled
                                    />
                                    <DisabledTextField200
                                        label="FAX"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null ?
                                                '' : this.props.clientDetail.fax
                                        }
                                        disabled
                                    />
                                    <DisabledTextField200
                                        label="登録支店"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null
                                                || this.props.clientDetail.branch_offices === null ?
                                                '' : this.props.clientDetail.branch_offices.name
                                        }
                                        disabled
                                    />
                                    <DisabledTextField200
                                        label="登録日"
                                        value={
                                            Object.keys(this.props.clientDetail).length === 0
                                                || this.props.clientDetail === null ?
                                                '' : this.props.clientDetail.reg_history
                                        }
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CustomCard>
                    {/* 現場情報エリア */}
                    <Grid container>
                        <DisabledTextField200
                            label="現場コード"
                            value={this.props.siteDetail.id}
                            disabled
                        />
                        <CustomTextField400
                            label="名称"
                            value={this.state.name}
                            name="name"
                            onChange={this.onChangeField}
                        />
                        <CustomTextField200
                            select
                            label="支店"
                            value={this.state.branch_office_id}
                            name="branch_office_id"
                            onChange={this.onChangeField}
                        >
                            {branchs.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </CustomTextField200>
                    </Grid>
                    <Grid container>
                        <CustomTextField200
                            label="都道府県"
                            value={this.state.prefecture}
                            name="prefecture"
                            onChange={this.onChangeField}
                        />
                        <CustomTextField400
                            label="市区町村"
                            value={this.state.city}
                            name="city"
                            onChange={this.onChangeField}
                        />
                        <CustomTextField400
                            label="番地"
                            value={this.state.address}
                            name="address"
                            onChange={this.onChangeField}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <CustomTextField60
                                label="最寄駅1"
                                value={this.state.nearest_station_id_1}
                                name="nearest_station_id_1"
                                onChange={this.onChangeField}
                            />
                            <DisabledTextField200
                                label="　"
                                value={
                                    Object.keys(this.props.siteDetail).length === 0 ||
                                        this.props.siteDetail.stations1 === null ?
                                        '' : this.props.siteDetail.stations1.name
                                }
                                disabled
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField60
                                label="最寄駅2"
                                value={this.state.nearest_station_id_2}
                                name="nearest_station_id_2"
                                onChange={this.onChangeField}
                            />
                            <DisabledTextField200
                                label="　"
                                value={
                                    Object.keys(this.props.siteDetail).length === 0 ||
                                        this.props.siteDetail.stations2 === null ?
                                        '' : this.props.siteDetail.stations2.name
                                }
                                disabled
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField60
                                label="最寄駅3"
                                value={this.state.nearest_station_id_3}
                                name="nearest_station_id_3"
                                onChange={this.onChangeField}
                            />
                            <DisabledTextField200
                                label="　"
                                value={
                                    Object.keys(this.props.siteDetail).length === 0
                                        || this.props.siteDetail.stations3 === null ?
                                        '' : this.props.siteDetail.stations3.name
                                }
                                disabled
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                            <Grid container>
                                <CustomTextField
                                    label="交通費"
                                    value={this.state.commuting_allowance}
                                    name="commuting_allowance"
                                    onChange={this.onChangeField}
                                />
                                <CustomTextField
                                    label="別途交通費"
                                    value={this.state.separate_transportation_fee}
                                    name="separate_transportation_fee"
                                    onChange={this.onChangeField}
                                />
                                <CustomFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.separate_transportation_way}
                                            onChange={this.onCheckedSepTranWay}
                                            color="primary"
                                        />
                                    }
                                    label="バスなど"
                                />
                            </Grid>
                            <Grid container>
                                <CustomTextField600
                                    label="作業内容"
                                    value={this.state.work_content}
                                    name="work_content"
                                    onChange={this.onChangeField}
                                    multiline
                                    rows="3"
                                />
                            </Grid>
                            <Grid container>
                                <CustomTextField600
                                    label="備考"
                                    value={this.state.note}
                                    name="note"
                                    onChange={this.onChangeField}
                                    multiline
                                    rows="3"
                                />
                            </Grid>
                            <Grid container>
                                <CustomTextField600
                                    label="経理備考"
                                    value={this.state.accounting_note}
                                    name="accounting_note"
                                    onChange={this.onChangeField}
                                    multiline
                                    rows="3"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <Grid container>
                                <CustomFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.disable_flag}
                                            onChange={this.onCheckedDisabledFlg}
                                            color="primary"
                                        />
                                    }
                                    label="無効"
                                />
                            </Grid>
                            <Grid container>
                                {/* 必要用具エリア */}
                                <Typography color="textSecondary">
                                    必要用具
                                </Typography>
                                {this.state.site_tools.map((data) => {
                                    return (
                                        <div>
                                            <Chip
                                                key={data}
                                                label={data}
                                                // onDelete={this.handleDelete(data)}
                                            />
                                        </div>
                                    )
                                })}
                                <CustomButton
                                    variant="outlined"
                                >
                                    選択
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {/* ボタンエリア */}
                <CustomButton
                    variant="outlined"
                    onClick={() => this.onSubmit()}
                >
                    {Object.keys(this.props.siteDetail).length === 0 ? '登録' : '更新'}
                </CustomButton>
                {Object.keys(this.props.siteDetail).length === 0 ?
                    '' :
                    <CustomButton
                        variant="outlined"
                        onClick={() => this.onDelete()}
                    >
                        削除
                    </CustomButton>
                }
            </div>
        )
    }
}


export default withStyles(styles)(SiteInfo)
