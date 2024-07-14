import * as mongoose from 'mongoose';

export interface RefreshToken extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId;
  token: string;
  expires: Date;
}
