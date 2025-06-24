import { Client, NormalizedClient } from '@/interfaces/clients';

export const normalizeClients = (rawClients: Client[]): NormalizedClient[] => {
  return rawClients.map((client) => {
    const fullName = client.info?.nomeCompleto || '';
    const nameParts = fullName.trim().split(' ');
    const shortName = nameParts.length > 1 ? `${nameParts[0]} ${nameParts[nameParts.length - 1]}` : fullName;

    return {
      fullName: shortName,
      email: client.info?.detalhes?.email || '',
      birthDate: client.info?.detalhes?.nascimento || '',
      sales: (client.estatisticas?.vendas || []).map((venda) => ({
        date: venda.data,
        amount: venda.valor,
      })),
    };
  });
};
