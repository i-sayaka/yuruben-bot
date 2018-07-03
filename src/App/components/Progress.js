import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress, Fade } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ReactModal from 'react-modal'
import theme from '../theme/Theme'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        transform: 'translate(-50%, -50%)',
        zIndex: 99,
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    content: {
        position: 'absolute',
        top: 'auto',
        bottom: '50%',
        background: 'none',
        overflow: 'hidden',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        zIndex: 99,
        textAlign: 'center',
        border: 'none',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
ReactModal.setAppElement('#root')

function mapStateToProps(state) {
    return {
        loading: state.progress.loading,
    }
}

class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <ReactModal
                        // onRequestClose={this.props.loading}
                        isOpen={this.props.loading}
                        style={customStyles}
                        shouldCloseOnOverlayClick={false}
                        shouldCloseOnEsc={false}
                        bodyOpenClassName="body"
                        size={50}
                    >
                        <div>
                            <div>
                                <Fade
                                    in={this.props.loading}
                                    style={{
                                        transitionDelay: this.props.loading ? '800ms' : '0ms',
                                    }}
                                    unmountOnExit
                                >
                                    <CircularProgress />
                                </Fade>
                            </div>
                        </div>
                    </ReactModal>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps)(Progress)
