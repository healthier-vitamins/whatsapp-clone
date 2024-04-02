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
    console.log('fulfilledTimeStamp: ', fulfilledTimeStamp)
    console.log('startedTimeStamp: ', startedTimeStamp)
    console.log('error: ', error)

    return <>{data}</>
}
