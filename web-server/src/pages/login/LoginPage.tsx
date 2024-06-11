import { skipToken } from '@reduxjs/toolkit/query'
import moment from 'moment'
import { useState } from 'react'
import CoreTextDropdown from '../../components/common/select/CoreTextDropdown'
import dateConstant from '../../globals/date.constant'
import useHistory from '../../hooks/common/useHistory'
import { useLoginQuery } from '../../rtk-query/api/authentication.api'
import LargeWhatsappSvg from '../../svgs/LargeWhatsappSvg'

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
        <div className="min-w-screen h-full min-h-screen w-full ">
            <div className="absolute inset-0 z-[1] h-[222px] min-h-[222px] w-full bg-[#00a884]" />
            <div className="  z-0 flex h-full  w-full flex-col justify-center border border-red-600 bg-slate-100">
                <div className="z-[2] flex h-[95px] w-full justify-center">
                    <div className="flex w-full max-w-[1000px] items-center pl-[36px] lg:pl-0">
                        <LargeWhatsappSvg />
                        <span className="ml-[14px] text-[14px] font-medium text-white">
                            WHATSAPP WEB CLONE
                        </span>
                    </div>
                </div>

                <div className="z-[2] flex h-full  w-full items-center justify-center ">
                    <div className="flex h-full w-full max-w-[1000px] flex-col bg-white lg:rounded">
                        {/* // TODO this min h is not working */}
                        <div className="mb-[95px] flex h-full  w-1/3 flex-col items-center ">
                            {/* <CoreTextDropdown
                            options={[
                                { description: '12345678', id: '1' },
                                { description: '87654321', id: '2' }
                            ]}
                            onClick={(id) => console.log('selected id: ', id)}
                            placeholder="Select a User"
                        /> */}
                            <form>
                                <select>
                                    <option className="rounded border-0 bg-slate-500 ring-0">
                                        test 1
                                    </option>
                                    <option>test 2</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
