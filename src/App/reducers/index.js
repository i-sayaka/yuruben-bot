import { combineReducers } from 'redux'
import main from '../../Main/reducers/index'
import worker from '../../Worker/reducers/index'
import reservation from '../../Reservation/reducers/'
import site from '../../Site/reducers/Site'
import work from '../../Work/reducers/Work'
import station from '../../Station/reducers/'
import progress from './Progress'

export default combineReducers({
    main,
    worker,
    reservation,
    site,
    work,
    station,
    progress
})
