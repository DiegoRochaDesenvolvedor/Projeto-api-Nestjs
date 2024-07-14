import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Aqui você implementa a lógica de verificação do token
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: 'Token de acesso requerido.' });
    }
    // Supondo que você tenha uma função `verifyToken` para validar o token
    try {
      const decoded = verifyToken(token);
      // req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send({ message: 'Token inválido.' });
    }
  }
}
function verifyToken(token: string) {
  throw new Error('Function not implemented.');
}
