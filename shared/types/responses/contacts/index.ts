export interface IGetAllContacts {
    id: string
    username: string
    passwordHash: string
    phoneNumber: string
    lastSeen: Date | null
    status: string | null
}
