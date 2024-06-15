export interface IContact {
    id: string
    username: string
    passwordHash: string
    phoneNumber: string
    lastSeen: Date | null
    status: string | null
}
