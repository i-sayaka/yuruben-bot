import React from 'react'
import { Grid, Button, TextField, MenuItem } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Search } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import BaseComponent from '../../App/components/Base'

const CustomTextField = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '100px',
    },
}))(TextField)

const CustomTextField200 = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '200px',
    },
}))(TextField)

const CustomButton = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        width: '100px',
    },
}))(Button)

// 種別選択用リスト
const types = [
    {
        value: '0',
        label: '有効現場',
    },
    {
        value: '1',
        label: '無効現場',
    },
    {
        value: '2',
        label: '全て表示',
    }
]

// 支店選択用リスト
const branchs = [
    {
        value: 2,
        label: '秋葉原',
    }
]

class Form extends BaseComponent {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
            site_name: '',
            client_id: '',
            short_name: '',
            nearest_station_name: '',
            disable_flag: '0',
            branch_office_id: 2,
        }
        this.onChangeField = this.onChangeField.bind(this)
        this.onClear = this.onClear.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * フィールドの値が変更されたときの処理
     * @param e
     */
    onChangeField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * クリアボタンが押下されたときの処理
     */
    onClear() {
        this.setState({
            site_name: '',
            client_id: '',
            short_name: '',
            nearest_station_name: '',
            disable_flag: '0',
            branch_office_id: 2,
        })
    }

    /**
     * 検索ボタンが押下されたときの処理
     */
    onSubmit() {
        const temp = {
            site_name: this.state.site_name,
            client_id: this.state.client_id,
            short_name: this.state.short_name,
            nearest_station_name: this.state.nearest_station_name,
            disable_flag: this.state.disable_flag === '2' ? '' : this.state.disable_flag,
            branch_office_id: this.state.branch_office_id
        }

        const param = {}
        Object.keys(temp).forEach((k) => {
            if (temp[k] !== '') {
                param[k] = temp[k]
            }
        })
        this.props.siteSearch(param, 'sites/search')
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <CustomTextField200
                    label="現場名"
                    value={this.state.site_name}
                    name="site_name"
                    onChange={this.onChangeField}
                />
                <CustomTextField
                    label="顧客コード"
                    value={this.state.client_id}
                    name="client_id"
                    onChange={this.onChangeField}
                />
                <CustomTextField200
                    label="顧客フリガナ"
                    value={this.state.short_name}
                    name="short_name"
                    onChange={this.onChangeField}
                />
                <CustomTextField
                    label="最寄駅"
                    name="nearest_station_name"
                    value={this.state.nearest_station_name}
                    onChange={this.onChangeField}
                />
                <CustomTextField
                    select
                    label="種別"
                    value={this.state.disable_flag}
                    name="disable_flag"
                    onChange={this.onChangeField}
                >
                    {types.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </CustomTextField>
                <CustomTextField
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
                </CustomTextField>
                <CustomButton
                    variant="outlined"
                    onClick={this.onSubmit}
                >
                    <Search />検索
                </CustomButton>
                <CustomButton
                    variant="outlined"
                    onClick={this.onClear}
                >
                    クリア
                </CustomButton>
            </div>
        )
    }
}


export default Form
