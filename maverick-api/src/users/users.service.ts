import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  //TODO: Conectar com BD
  //TODO: Fazer consulta
  private readonly users = [
    {
      id: 1,
      name: 'João Lucas',
      username: 'gigonauta',
      password: '1234',
    },
  ];

  async findByUsername(username: string): Promise<any> {
    return this.users.filter((user) => user.username === username)[0] ?? null;
  }
}
