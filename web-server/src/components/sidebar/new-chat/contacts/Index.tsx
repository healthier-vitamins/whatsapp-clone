import apiContacts from '../../../../rtk-query/api/contacts.api'

export default function ContactsContainer() {
    const { data, error } = apiContacts.useGetAllQuery(undefined, {
        pollingInterval: 600000
    })

    console.log(data)
    return <div className="flex-col"></div>
}
