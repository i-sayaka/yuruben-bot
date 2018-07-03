import React from 'react'
import ReactModal from 'react-modal-resizable-draggable'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { IconButton, Grid } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import './app.css'
import theme from '../theme/Theme'

class Modal extends React.Component {
    render() {
        const BtnStyle = {
            height: '40px',
            marginLeft: '20px',
            zIndex: 3
        }
        const ModalStyle = {
            modal: {
                padding: '30px 0px 20px 0px',
                position: 'absolute',
                zIndex: this.props.zIndex || 3,
                background: '#fff',
                top: '5px'
            }
        }
        return (
            <MuiThemeProvider theme={theme}>
                <div style={ModalStyle.modal} className="app">
                    <ReactModal
                        initWidth={1300}
                        initHeight={600}
                        onRequestClose={this.props.closeModal}
                        isOpen={this.props.modalIsOpen}
                        disableResize
                        top={30}
                    >

                        <Grid container>
                            <Grid item xs={12}>

                                <div style={{ marginTop: '10px' }}>
                                    {this.props.children}
                                </div>
                                <div className="title-area"><h3>{this.props.title}</h3></div>
                                <div className="btn-area">
                                    <IconButton
                                        variant="fab"
                                        style={BtnStyle}
                                        onClick={this.props.closeModal}
                                    >
                                        <Cancel />
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </ReactModal>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default Modal
