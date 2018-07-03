import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core/'
import SiteInfo from '../containers/SiteInfo'
import WorkForm from '../containers/WorkForm'
import WorkTable from '../containers/WorkTable'
import Modal from '../../App/components/Modal'
import BaseComponent from '../../App/components/Base'

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

class SiteRegistration extends BaseComponent {
    state = {
        value: 0,
    };

    /**
     * コンポーネント破棄時の処理
     */
    componentWillUnmount() {
        this.props.clearSiteDetail()
    }

    /**
     * タブ変更時の処理
     */
    handleChange = (event, value) => {
        this.setState({ value })
    };

    render() {
        const { value } = this.state

        return (
            <Modal
                modalIsOpen={this.props.modalIsOpen}
                closeModal={this.props.closeModal}
                title="現場・作業登録"
                zIndex="99"
            >
                <AppBar position="static" color="default">
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={value}
                        onChange={this.handleChange}
                    >
                        <Tab label="現場情報" />
                        <Tab label="作業依頼情報" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                    <TabContainer>
                        <SiteInfo
                            onSubmit={param => this.props.onSubmit(param)}
                        />
                    </TabContainer>
                }
                {value === 1 &&
                    <TabContainer>
                        <WorkForm />
                        <WorkTable />
                    </TabContainer>
                }
            </Modal>
        )
    }
}

export default SiteRegistration
