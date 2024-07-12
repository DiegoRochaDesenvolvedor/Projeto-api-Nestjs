export interface CreateBookDto {
  titulo: string;
  descricao?: string;
  dataDePublicacao: Date;
  autorId: string;
}
