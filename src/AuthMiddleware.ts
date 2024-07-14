import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: 'Token de acesso requerido.' });
    }
    try {
      // const decoded = verifyToken(token);
      next();
    } catch (error) {
      return res.status(401).send({ message: 'Token inválido.' });
    }
  }
}
// function verifyToken(token: string) {
//   throw new Error('Function not implemented.');
// }
