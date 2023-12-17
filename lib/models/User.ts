export type UserConstructor = {
  id: number | undefined
  name: string | undefined
  email: string | undefined
  password: string | undefined
}

export default class User {
  id: number | undefined
  name: string | undefined
  email: string | undefined
  password: string | undefined

  constructor({ id, name, email, password }: UserConstructor) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}
