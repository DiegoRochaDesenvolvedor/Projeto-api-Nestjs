import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

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
    // Aqui você deve verificar a validade do refresh token
    // Por exemplo, verificando se está na lista de tokens válidos armazenados no banco de dados
    return this.generateAccessToken(userId);
  }
}
