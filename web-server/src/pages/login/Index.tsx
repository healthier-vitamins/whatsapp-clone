import { useState } from 'react'
import { IContact } from '../../../../shared/types/responses/contacts'
import CoreTextDropdown from '../../components/common/select/CoreTextDropdown'
import useLogin from '../../hooks/login/useLogin'
import apiContacts from '../../rtk-query/api/contacts.api'
import TopHeader from './TopHeader'

export default function LoginPage() {
    // -- Use States
    const [selectedUser, setSelectedUser] = useState<IContact | undefined>(
        undefined
    )

    // -- Use Queries
    const { data: contactsData, error } = apiContacts.useGetAllQuery(
        undefined,
        {
            pollingInterval: 600000
        }
    )

    // -- Hooks
    const loginHook = useLogin()

    console.log(contactsData)
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
            <div className="primary-background absolute inset-0 z-[1] h-[222px] min-h-[222px] w-full" />
            <div className="secondary-background z-0 flex h-full min-h-screen w-full flex-col  justify-start ">
                <div className="z-[2] flex h-[95px] w-full justify-center">
                    <TopHeader />
                </div>

                <div className="z-[2] flex h-full  w-full items-center justify-center">
                    <div className="mb-[95px] flex  h-[760px] min-h-[760px] w-[1000px]  bg-white lg:rounded">
                        <div className=" flex h-full min-h-full w-[40%] flex-col items-center border border-red-400 ">
                            <div className=" h-40 "></div>
                            <CoreTextDropdown
                                idKey="id"
                                className={`w-60 max-w-60`}
                                onClick={(selectedOption) =>
                                    setSelectedUser(selectedOption)
                                }
                                options={contactsData ? contactsData : []}
                                displayKey={'username'}
                            />
                            <button
                                onClick={() => loginHook.onClick(selectedUser)}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
