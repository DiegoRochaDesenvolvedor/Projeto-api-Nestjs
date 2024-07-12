import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from '../schemas/author.model'; // Ajuste o caminho de importação conforme necessário
import { CreateAuthorDto } from '../interfaces/Author.interface';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private AuthorModel: Model<Author>) {}

  async update(id: string, createAuthorDto: CreateAuthorDto): Promise<Author> {
    try {
      const updatedAuthor = await this.AuthorModel.findByIdAndUpdate(id, createAuthorDto, {
        new: true,
      });
      if (!updatedAuthor) {
        throw new Error(`Autor com ID ${id} não encontrado.`);
      }
      return updatedAuthor;
    } catch (error) {
      throw new Error(`Erro ao atualizar autor: ${error.message}`);
    }
  }

  async delete(id: string): Promise<string> {
    try {
      await this.AuthorModel.findByIdAndDelete(id);
      return `Livro com ID ${id} deletado com sucesso.`;
    } catch {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }

  async findOne(id: string) {
    return this.AuthorModel.findById(id);
  }

  async create(CreateAuthorDto: any): Promise<Author> {
    try {
      const createdAuthor = new this.AuthorModel(CreateAuthorDto);
      return createdAuthor.save();
    } catch {
      throw new Error('Nao foi possivel salvar os dados!');
    }
  }

  async findAll(): Promise<Author[]> {
    return this.AuthorModel.find().exec();
  }
}
