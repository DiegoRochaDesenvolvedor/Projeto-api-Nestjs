import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop()
  token: string;

  @Prop()
  expiresIn: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
