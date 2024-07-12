import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Author extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop()
  biografia: string;

  @Prop()
  dataDeNascimento: Date;

  @Prop({ required: true })
  usuario: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
