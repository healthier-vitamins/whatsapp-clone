import { skipToken } from '@reduxjs/toolkit/query'
import moment from 'moment'
import { useEffect } from 'react'
import dateConstant from '../../globals/date.constant'
import { useLoginQuery } from '../../rtk-query/api/authentication.api'

export default function LoginPage() {
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
        isFetching
    } = useLoginQuery(false ? skipToken : undefined, {})

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
    console.log('isFetching: ', isFetching)
    console.log('currentData: ', currentData)
    console.log('originalArgs: ', originalArgs)
    useEffect(() => {
        setTimeout(() => {
            if (!isUninitialized) refetch()
        }, 500)
    }, [])

    return <>{data}</>
}
