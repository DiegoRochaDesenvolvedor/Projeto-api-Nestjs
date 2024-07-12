import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../schemas/users.model'; // Ajuste o caminho de importação conforme necessário
import { CreateUsersDto } from '../interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async update(id: string, createUsersDto: CreateUsersDto): Promise<Users> {
    try {
      const updatedUsers = await this.usersModel.findByIdAndUpdate(id, createUsersDto, {
        new: true,
      });
      return updatedUsers;
    } catch {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }

  async delete(id: string): Promise<string> {
    try {
      await this.usersModel.findByIdAndDelete(id);
      return `Livro com ID ${id} deletado com sucesso.`;
    } catch {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }

  async findOne(id: string) {
    return this.usersModel.findById(id);
  }

  async create(createBookDto: any): Promise<Users> {
    try {
      const createdBook = new this.usersModel(createBookDto);
      return createdBook.save();
    } catch {
      throw new Error('Nao foi possivel salvar os dados!');
    }
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }
}
