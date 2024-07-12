import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  ID: string;

  @Prop()
  Titulo: string;

  @Prop()
  Descricao: string;

  @Prop({ type: Date })
  Data_de_publicacao: Date;

  @Prop()
  AutorID: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
