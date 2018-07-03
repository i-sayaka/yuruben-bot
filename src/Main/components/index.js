import React from 'react'
import Header from '../containers/Header'
import ReservationForm from '../containers/Form'
import ReservationTables from '../containers/Tables'
import Progress from '../../App/components/Progress'

const MainPage = props => (
    <div>
        <Progress />
        <Header />
        <ReservationForm />
        <ReservationTables />
    </div>
)

export default MainPage
