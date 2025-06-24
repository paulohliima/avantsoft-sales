import { IClientResponse } from '../interfaces/clients';

export const clientsData: IClientResponse = {
  data: {
    clientes: [
      {
        info: {
          nomeCompleto: 'Ana Beatriz',
          detalhes: {
            email: 'ana.b@example.com',
            nascimento: '1992-05-01',
          },
        },
        estatisticas: {
          vendas: [
            { data: '2025-06-23', valor: 150 },
            { data: '2025-06-21', valor: 50 },
          ],
        },
      },
      {
        info: {
          nomeCompleto: 'Carlos Eduardo',
          detalhes: {
            email: 'cadu@example.com',
            nascimento: '1987-08-15',
          },
        },
        duplicado: {
          nomeCompleto: 'Carlos Eduardo',
        },
        estatisticas: {
          vendas: [],
        },
      },
      {
        info: {
          nomeCompleto: 'Mariana Silva',
          detalhes: {
            email: 'mariana.silva@example.com',
            nascimento: '1990-11-10',
          },
        },
        estatisticas: {
          vendas: [
            { data: '2025-06-20', valor: 200 },
            { data: '2025-06-22', valor: 300 },
            { data: '2025-06-23', valor: 150 },
          ],
        },
      },
      {
        info: {
          nomeCompleto: 'Felipe Santos',
          detalhes: {
            email: 'felipe.santos@example.com',
            nascimento: '1985-04-05',
          },
        },
        estatisticas: {
          vendas: [
            { data: '2025-06-18', valor: 400 },
            { data: '2025-06-19', valor: 100 },
          ],
        },
      },
    ],
  },
  meta: {
    registroTotal: 4,
    pagina: 1,
  },
  redundante: {
    status: 'ok',
  },
};
