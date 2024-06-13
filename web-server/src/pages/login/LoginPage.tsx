import CoreTextDropdown from '../../components/common/select/CoreTextDropdown'
import apiContacts from '../../rtk-query/api/contacts.api'
import LargeWhatsappSvg from '../../svgs/LargeWhatsappSvg'

export default function LoginPage() {
    const { data, error } = apiContacts.useGetAllQuery(undefined, {
        pollingInterval: 600000
    })

    console.log(data)
    // const {
    //     isError,
    //     isLoading,
    //     fulfilledTimeStamp,
    //     startedTimeStamp,
    //     data,
    //     error,
    //     currentData,
    //     refetch,
    //     originalArgs,
    //     isUninitialized,
    //     isFetching,
    //     isSuccess,
    //     requestId,
    //     endpointName
    // } = useLoginQuery(false ? skipToken : args, {})

    return (
        <div className="min-w-screen h-full min-h-screen w-full ">
            <div className="absolute inset-0 z-[1] h-[222px] min-h-[222px] w-full bg-[#00a884]" />
            <div className="  z-0 flex h-full min-h-screen w-full flex-col justify-start border border-red-600 bg-slate-100">
                <div className="z-[2] flex h-[95px] w-full justify-center">
                    <div className="flex w-full max-w-[1000px] items-center pl-[36px] lg:pl-0">
                        <LargeWhatsappSvg />
                        <span className="ml-[14px] text-[14px] font-medium text-white">
                            WHATSAPP WEB CLONE
                        </span>
                    </div>
                </div>

                <div className="z-[2] flex h-full  w-full items-center justify-center ">
                    <div className="flex h-full min-h-[1000px] w-full  max-w-[1000px] flex-col bg-white lg:rounded">
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
                            <CoreTextDropdown
                                idKey="id"
                                className={`w-2 max-w-2`}
                                onClick={(id) =>
                                    console.log('selected id:', id)
                                }
                                options={data ? data : []}
                                displayKey={'username'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
