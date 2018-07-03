import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import BaseComponent from '../../App/components/Base'
import Modal from '../../App/components/Modal'
import Form from '../containers/Form'
import SiteTable from '../containers/Table'
import SiteRegistration from '../containers/SiteRegistration'

const CustomButton = withStyles(theme => ({
    root: {
        margin: theme.spacing.unit,
        float: 'right',
    },
}))(Button)

class Site extends BaseComponent {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = {
        }
    }

    /**
     * コンポーネント破棄時の処理
     */
    componentWillUnmount() {
        this.props.clearState()
    }

    /**
     * 現場登録モーダルを開く
     */
    openSiteRegModal() {
        this.props.openSiteRegModal()
    }

    /**
     * 現場登録モーダルを閉じる
     */
    closeSiteRegModal() {
        this.props.closeSiteRegModal()
    }

    /**
     * 現場詳細モーダルを閉じる
     */
    closeSiteDetailModal() {
        this.props.closeSiteDetailModal()
    }

    /**
     * 現場登録
     */
    siteRegistration(param) {
        this.props.siteRegistration(param, 'sites')
    }

    /**
     * 現場更新
     */
    siteUpdate(param) {
        this.props.siteUpdate(param, `sites/${param.id}`)
    }

    render() {
        const { classes } = this.props

        return (
            <Modal
                modalIsOpen={this.props.modalIsOpen}
                closeModal={this.props.closeModal}
                title="現場登録"
                zIndex="99"
            >
                <Form />
                <SiteTable />
                <CustomButton
                    variant="outlined"
                    onClick={() => this.openSiteRegModal()}
                >
                    新規
                </CustomButton>
                <SiteRegistration
                    modalIsOpen={this.props.siteRegModalIsOpen}
                    closeModal={() => this.closeSiteRegModal()}
                    onSubmit={param => this.siteRegistration(param)}
                />
                <SiteRegistration
                    modalIsOpen={this.props.siteDetailModalIsOpen}
                    closeModal={() => this.closeSiteDetailModal()}
                    onSubmit={param => this.siteUpdate(param)}
                />
            </Modal>
        )
    }
}

export default Site
