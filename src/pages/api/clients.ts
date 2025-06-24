import type { NextApiRequest, NextApiResponse } from 'next';

import { Client, IClientRequest, IClientResponse } from '@/interfaces/clients';
import { clientsData } from '@/lib/clients-store';

const generateSales = (): { data: string; valor: number }[] => {
  const quantidade = Math.floor(Math.random() * 2) + 1;
  const vendas = [];

  for (let i = 0; i < quantidade; i++) {
    const diasAtras = Math.floor(Math.random() * 7);
    const data = new Date();
    data.setDate(data.getDate() - diasAtras);

    vendas.push({
      data: data.toISOString().split('T')[0],
      valor: Math.floor(Math.random() * 900) + 100,
    });
  }

  return vendas;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const response: IClientResponse = {
      data: {
        clientes: clientsData.data.clientes,
      },
      meta: {
        registroTotal: clientsData.data.clientes.length,
        pagina: 1,
      },
      redundante: {
        status: 'ok',
      },
    };

    return res.status(200).json(response);
  }

  if (req.method === 'POST') {
    const { nomeCompleto, email, nascimento, vendasAleatorias }: IClientRequest = req.body;

    if (!nomeCompleto || !email || !nascimento) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const vendas = vendasAleatorias ? generateSales() : [];

    const newClient: Client = {
      info: {
        nomeCompleto,
        detalhes: {
          email,
          nascimento,
        },
      },
      estatisticas: {
        vendas,
      },
    };

    clientsData.data.clientes.push(newClient);

    return res.status(201).json({
      message: 'Cliente criado com sucesso.',
      cliente: newClient,
    });
  }

  res.status(200).json({ name: 'John Doe' });
}
