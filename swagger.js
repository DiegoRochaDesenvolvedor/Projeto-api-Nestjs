const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nome da sua API',
      version: '1.0.0',
      description: 'Uma descrição da sua API',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos onde você documentou as rotas
};

const specs = swaggerJsdoc(options);

module.exports = specs;
