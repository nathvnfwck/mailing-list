import { type UserRepository } from '@/usecases/ports/user-repository'

import { type UserData } from '@/entities/user-data'

export class InMemoryUserRepository implements UserRepository {
  private readonly _items: UserData[] = []

  constructor (users?: UserData[]) {
    if (users) this._items = users
  }

  async create (data: UserData): Promise<void> {
    this._items.push(data)
  }

  async findAll (): Promise<UserData[]> {
    return this._items
  }

  async exists (email: string): Promise<boolean> {
    return !(this._items.find((user) => user.email === email) == null)
  };
}
