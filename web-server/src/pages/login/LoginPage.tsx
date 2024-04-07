import { skipToken } from '@reduxjs/toolkit/query'
import moment from 'moment'
import { useEffect, useState } from 'react'
import dateConstant from '../../globals/date.constant'
import { useLoginQuery } from '../../rtk-query/api/authentication.api'

export default function LoginPage() {
    const [args, setArgs] = useState({ id: 's1111', name: 'heeyo' })

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

    useEffect(() => {
        setTimeout(() => {
            setArgs({
                id: 's2222',
                name: 'byee'
            })
        }, 1000)
    }, [])

    return <>{data}</>
}
