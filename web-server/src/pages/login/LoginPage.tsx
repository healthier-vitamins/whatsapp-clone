import { skipToken } from '@reduxjs/toolkit/query'
import moment from 'moment'
import { useState } from 'react'
import CoreTextDropdown from '../../components/common/select/CoreTextDropdown'
import dateConstant from '../../globals/date.constant'
import useHistory from '../../hooks/common/useHistory'
import { useLoginQuery } from '../../rtk-query/api/authentication.api'

export default function LoginPage() {
    const [args, setArgs] = useState({ id: 's1111', name: 'heeyo' })
    // const test = true
    // if (test) customHistory.block(() => {})

    useHistory()

    const {
        isError,
        isLoading,
        fulfilledTimeStamp,
        startedTimeStamp,
        data,
        error,
        currentData,
        refetch,
        originalArgs,
        isUninitialized,
        isFetching,
        isSuccess,
        requestId,
        endpointName
    } = useLoginQuery(false ? skipToken : args, {})

    console.log('============= start ==================')
    console.log('isError: ', isError)
    console.log('isLoading: ', isLoading)
    console.log(
        'fulfilledTimeStamp: ',
        moment(fulfilledTimeStamp).format(dateConstant.DATE_WITH_TIME)
    )

    console.log(
        'startedTimeStamp: ',
        moment(startedTimeStamp).format(dateConstant.DATE_WITH_TIME)
    )
    console.log('error: ', error)
    console.log('isSuccess: ', isSuccess)
    console.log('requestId: ', requestId)
    console.log('isFetching: ', isFetching)
    console.log('currentData: ', currentData)
    console.log('originalArgs: ', originalArgs)
    console.log('endpointName: ', endpointName)
    console.log('============= end ==================')

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (!isUninitialized) refetch()
    //     }, 500)
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setArgs({
    //             id: 's2222',
    //             name: 'byee'
    //         })
    //     }, 1000)
    // }, [])

    return (
        <div className=" flex h-screen w-screen flex-col">
            <div className="h-[222px] min-h-[222px]  w-full bg-[#00a884]" />
            <div className="h-full w-full bg-slate-100" />
            <div className="absolute inset-y-0 z-[1] flex h-full w-full items-center justify-center">
                <div className="h-full max-h-[950px] w-full max-w-[950px] bg-slate-200">
                    <div className="flex h-full w-1/3 flex-col items-center ">
                        <form>
                            <label>Select a user</label>
                            <select>
                                <option>ur muthter 1</option>
                                <option>ur muthter 2</option>
                            </select>
                        </form>
                        {/* <CoreTextDropdown placeholder="Select a User" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
