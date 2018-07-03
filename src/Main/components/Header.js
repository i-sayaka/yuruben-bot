import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { Menu, AccountCircle } from '@material-ui/icons'
import theme from '../../App/theme/Theme'
import Modal from '../../App/components/Modal'
import ReservationPage from '../../Reservation/components/index'
import Site from '../../Site/containers/index'
import Progress from '../../App/components/Progress'

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1,
        minHeight: 20,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    outlined: {
        marginLeft: '10px',
        marginRight: '10px',
        borderColor: '#fff',
        color: '#fff'
    }
}

const CustomToolbar = withStyles(({
    root: {
        minHeight: '50px'
    },
}))(Toolbar)

const CustomAppBar = withStyles(({
    root: {
        margin: '-8px -8px 10px -8px'
    },
}))(AppBar)

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            siteModalIsOpen: false
        }
        this.classes = props.classes
    }

    onReload = () => {
        const param = {
            branch_office_id: 2,
            date: this.props.date
        }
        this.props.onClick(param, 'views/main')
    }

    openModal = (param) => {
        this.setState({ [param]: true })
    }

    closeModal = (param) => {
        this.setState({ [param]: false })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className={this.classes.root}>
                    <CustomAppBar position="static">
                        <CustomToolbar>
                            <IconButton className={this.classes.menuButton} color="inherit" aria-label="Menu">
                                <Menu />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={this.classes.flex}>
                                作業予約
                            </Typography>

                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                                onClick={this.onReload}
                            >再表示
                            </Button>

                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >全解除
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >全社伝言
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >他支店状況
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >人材登録
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >顧客登録
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >支払処理
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >出勤簿
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                            >出勤確認
                            </Button>
                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                                onClick={() => this.openModal('siteModalIsOpen')}
                            >現場・作業
                            </Button>

                            <Button
                                className={this.classes.outlined}
                                variant="outlined"
                                size="small"
                                onClick={() => this.openModal('modalIsOpen')}
                            >作業予約
                            </Button>
                            <Button className={this.classes.outlined} color="inherit">Logout</Button>
                            <IconButton variant="fab"><AccountCircle /></IconButton>
                        </CustomToolbar>
                    </CustomAppBar>
                    <Modal
                        modalIsOpen={this.state.modalIsOpen}
                        closeModal={() => this.closeModal('modalIsOpen')}
                        title="予約・完了登録"
                    >
                        <ReservationPage />
                    </Modal>
                    <Site
                        modalIsOpen={this.state.siteModalIsOpen}
                        closeModal={() => this.closeModal('siteModalIsOpen')}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}


export default withStyles(styles)(Header)
