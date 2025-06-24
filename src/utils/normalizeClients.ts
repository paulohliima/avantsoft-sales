import { Client, NormalizedClient } from '@/interfaces/clients';

export const normalizeClients = (rawClients: Client[]): NormalizedClient[] => {
  return rawClients.map((client) => ({
    fullName: client.info?.nomeCompleto || '',
    email: client.info?.detalhes?.email || '',
    birthDate: client.info?.detalhes?.nascimento || '',
    sales: (client.estatisticas?.vendas || []).map((venda) => ({
      date: venda.data,
      amount: venda.valor,
    })),
  }));
};
