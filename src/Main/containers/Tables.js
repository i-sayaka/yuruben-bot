import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { onClickLeft, onClickRight } from '../actions/index'
import TableComponents from '../components/Tables'

const dataFormat = {
    id: '',
    clients_name: '',
    clients_display_name: '',
    stations1_name: '',
    sites_name: '',
    work_time: '',
    site_tools: '',
    all_office: '',
    branch_office: '',
    work_id: '',
    branch_office_id: '',
    reservation_div: '',
    workerInfo1: {},
    workerInfo2: {},
    workerInfo3: {},
    workerInfo4: {},
}

const createTableData = (sourceList, div) => {
    const generateList = []
    let branchOffice = null
    let rowData = {}

    sourceList.forEach((d) => {
        rowData = _.cloneDeep(dataFormat)

        if (d.clients) {
            if (branchOffice && branchOffice !== d.clients.branch_office_id) {
                branchOffice = d.clients.branch_office_id
                generateList.push(dataFormat)
            } else {
                branchOffice = d.clients.branch_office_id
            }
            rowData.clients_display_name = d.clients.display_name
            rowData.clients_name = d.clients.name || null
            rowData.branch_office_id = d.clients.branch_office_id
        }

        rowData.id = d.work_detail_id
        rowData.work_time = d.work_start_time && d.work_end_time ? `${d.work_start_time}~${d.work_end_time}` : null
        rowData.site_tools = d.site_tools || null
        rowData.work_id = d.work_id
        rowData.reservation_div = div

        if (d.sites) {
            rowData.sites_name = d.sites.name || null
            if (d.sites.stations1) {
                rowData.stations1_name = d.sites.stations1.name || null
            }
        }

        if (d.num) {
            rowData.all_office = `${d.num.all.numerator}/${d.num.all.denominator}`
            rowData.branch_office = `${d.num.branch_office.numerator}/${d.num.branch_office.denominator}`
        }

        if (Array.isArray(d.assigned)) {
            let i = 0
            d.assigned.forEach((v) => {
                if (i === 4) {
                    generateList.push(rowData)
                    rowData = _.cloneDeep(dataFormat)
                    rowData.id = d.id + _.uniqueId()
                    rowData.work_id = d.work_id
                    i = 0
                }
                i += 1
                rowData[`workerInfo${i}`].worker = v.display_name || ''
                rowData[`workerInfo${i}`].worker_id = v.worker_id || ''
                rowData[`workerInfo${i}`].reservation_id = v.work_reservation_id || ''
                rowData[`workerInfo${i}`].temp_reservation = v.temp_reservation || '0'
                rowData[`workerInfo${i}`].attendance_confirmation = v.attendance_confirmation_scheduled_time || ''
                rowData[`workerInfo${i}`].tooltip = null
                if (v.display_name && v.worker_id) {
                    rowData[`workerInfo${i}`].tooltip = `${v.worker_id}:${v.display_name}`
                }
            })
        }
        generateList.push(rowData)
    })
    return generateList
}

const mapStateToProps = (state) => {
    const payload = Object.assign({}, state.main.payload)
    const worksList = []
    const workerList = []

    // 顧客
    if (payload.work_list !== null) {
        const dayTime = payload.work_list.daytime
        const nightTime = payload.work_list.nighttime
        const otherBranchDayTime = payload.work_list.other_branch_office_daytime
        const otherBranchNightTime = payload.work_list.other_branch_office_nighttime

        if (Array.isArray(dayTime) && dayTime.length > 0) {
            Array.prototype.push.apply(worksList, createTableData(dayTime, 'dayTime'))
        }

        if (Array.isArray(otherBranchDayTime) && otherBranchDayTime.length > 0) {
            worksList.push(dataFormat)
            Array.prototype.push.apply(worksList, createTableData(otherBranchDayTime, 'otherBranchDayTime'))
        }

        if (Array.isArray(nightTime) && nightTime.length > 0) {
            worksList.push(dataFormat)
            Array.prototype.push.apply(worksList, createTableData(nightTime, 'nightTime'))
        }

        if (Array.isArray(otherBranchNightTime) && otherBranchNightTime.length > 0) {
            worksList.push(dataFormat)
            Array.prototype.push.apply(worksList, createTableData(otherBranchNightTime, 'otherBranchNightTime'))
        }
    }

    // 人材
    if (Array.isArray(payload.worker_list) &&
        payload.worker_list !== null &&
        payload.worker_list.length > 0) {
        payload.worker_list.forEach((d) => {
            const workerDatas = {
                id: d.id,
                // 名前
                full_name: d.full_name,
                // 用具
                tools: d.tools,
                // 状況
                worker_situations_name: '',
                // 仮予約
                temp_reservation: '',
                // 割り当て確定時間
                attendance_confirmation: '',
                // 昼
                reservation_time_day: '',
                // 夜
                reservation_time_night: '',
                // 最寄駅
                stations1_name: '',
                // ｺｰﾄﾞ
                worker_id: d.worker_id,
                // 携帯番号
                mobile_phone: d.mobile_phone,
                // 電話番号
                phone: d.phone,
                // 支店
                branch_offices: '',
                // 出勤数
                attendance: d.attendance,
                // 希望職種
                desired_job_type: d.desired_job_type,
                // 予約備考
                note: '',
                // 予約ID
                reservation_id: '',
                reservation_id_night: ''
            }

            if (d.worker_situations) {
                workerDatas.worker_situations_name = d.worker_situations.name
            }

            if (d.reservations) {
                if (Array.isArray(d.reservations)) {
                    d.reservations.forEach((v) => {
                        workerDatas.reservation_time_day = v.reservation_time_zone === '1' ? '〇' : workerDatas.reservation_time_day
                        workerDatas.reservation_time_night = v.reservation_time_zone === '2' ? '〇' : workerDatas.reservation_time_night
                        if (v.note) {
                            workerDatas.note += v.note
                        }
                        if (v.reservation_time_zone === '2') {
                            // 夜
                            workerDatas.reservation_id_night = v.work_reservation_id
                        } else {
                            // 昼、指定なし
                            workerDatas.reservation_id = v.work_reservation_id
                        }
                    })
                } else {
                    // 仮予約
                    workerDatas.temp_reservation = d.reservations.temp_reservation || ''

                    // 割り当て確定時間
                    workerDatas.attendance_confirmation = d.reservations.attendance_confirmation_scheduled_time || ''

                    // 予約時間帯 0:未定 1:昼 2:夜
                    workerDatas.reservation_time_day = d.reservations.reservation_time_zone === '1' ? '〇' : ''
                    workerDatas.reservation_time_night = d.reservations.reservation_time_zone === '2' ? '〇' : ''

                    workerDatas.reservation_id = d.reservations.work_reservation_id
                }
            }

            if (d.stations1) {
                workerDatas.stations1_name = d.stations1.name
            }

            if (d.branch_offices) {
                workerDatas.branch_offices = d.branch_offices.name
            }
            workerList.push(workerDatas)
        })
    }
    return {
        worksList,
        workerList,
        other: state.main.payload.other,
        date: state.main.date,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClickLeft: bindActionCreators(onClickLeft, dispatch),
        onClickRight: bindActionCreators(onClickRight, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableComponents)

