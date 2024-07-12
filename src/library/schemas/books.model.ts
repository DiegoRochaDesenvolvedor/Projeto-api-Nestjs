import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop()
  descricao: string;

  @Prop()
  dataDePublicacao: Date;

  @Prop({ required: true })
  autorId: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
