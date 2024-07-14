import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthSchema } from '../schemas/auth.model';
import mongoose from 'mongoose';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  AuthModel = mongoose.model('Auth', AuthSchema);

  async create(createAuthDto: any) {
    const { token, clientID, userId } = createAuthDto;

    // Verifique se expiresIn é um número e converta para segundos
    const expiresInDate = new Date();
    expiresInDate.setSeconds(expiresInDate.getSeconds() + 7000);

    // Verifique se userId foi fornecido
    if (!userId) {
      throw new Error('userId é obrigatório');
    }

    // Use o modelo para criar um novo documento
    const authToken = new this.AuthModel({
      token,
      expiresIn: expiresInDate,
      clientID,
      userId, // Inclua userId no documento
    });

    // Salve o documento no banco de dados
    try {
      await authToken.save();
      return authToken; // Retorne o documento salvo
    } catch (error) {
      throw new Error('Não foi possível salvar o token: ' + error.message);
    }
  }
  async generateAccessToken(userId: string): Promise<string> {
    const payload = { userId };
    return this.jwtService.sign(payload);
  }

  async generateRefreshToken(userId: string): Promise<string> {
    const payload = { userId };
    // Aqui você pode definir um tempo de expiração diferente para o refresh token
    return this.jwtService.sign(payload, { expiresIn: '7d' });
  }

  // Método para validar e gerar um novo token de acesso a partir de um refresh token
  async refreshToken(userId: string): Promise<string> {
    return this.generateAccessToken(userId);
  }
}
