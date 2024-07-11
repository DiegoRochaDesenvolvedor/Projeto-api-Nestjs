import mongoose, { ConnectOptions } from 'mongoose';

const mongoDBUri: string = 'mongodb://localhost:27017/library';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
  } catch (err) {
    console.error('Não foi possível conectar ao banco de dados', err);
    process.exit(1);
  }
};

const closeDB = async () => {
  try {
    await mongoose.connection.close();
    console.log('Conexão com o MongoDB fechada com sucesso.');
  } catch (err) {
    console.error('Erro ao fechar a conexão com o banco de dados', err);
  }
};

export { connectDB, closeDB };
