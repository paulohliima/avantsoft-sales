import type { NextApiRequest, NextApiResponse } from 'next';

import { Client, IClientRequest, IClientResponse } from '@/interfaces/clients';
import { clientsData } from '@/lib/clients-store';

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
    const { nomeCompleto, email, nascimento }: IClientRequest = req.body;

    if (!nomeCompleto || !email || !nascimento) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const newClient: Client = {
      info: {
        nomeCompleto,
        detalhes: {
          email,
          nascimento,
        },
      },
      estatisticas: {
        vendas: [],
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
