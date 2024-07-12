export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export interface CreateUsersDto {
  nome: string;
  email: string;
  senha: string;
  role: UserRole;
}
