import moment from 'moment'
import dateConstant from '../../globals/date.constant'
import { useLoginQuery } from '../../rtk-query/api/authentication.api'

export default function LoginPage() {
    const {
        isError,
        isLoading,
        fulfilledTimeStamp,
        startedTimeStamp,
        data,
        error
    } = useLoginQuery()

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

    return <>{data}</>
}
