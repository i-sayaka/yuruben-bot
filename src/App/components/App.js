// components.App.js
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/Theme'
import ReservationPage from '../../Main/components/index'

const App = () => (
    <MuiThemeProvider theme={theme}>
        <div>
            <div>
                <ReservationPage />
            </div>
        </div>
    </MuiThemeProvider>
)

export default App
