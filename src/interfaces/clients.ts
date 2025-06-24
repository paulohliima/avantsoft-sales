export interface IClientRequest {
  nomeCompleto: string;
  email: string;
  nascimento: string;
  vendasAleatorias?: boolean;
}

export interface IClientResponse {
  data: {
    clientes: Client[];
  };
  meta: {
    registroTotal: number;
    pagina: number;
  };
  redundante: {
    status: string;
  };
}

export interface ICreateClientResponse {
  message: string;
  cliente: Client;
}

export interface Client {
  info: {
    nomeCompleto: string;
    detalhes: {
      email: string;
      nascimento: string;
    };
  };
  estatisticas: {
    vendas: Sale[];
  };
  duplicado?: {
    nomeCompleto: string;
  };
}

export interface Sale {
  data: string;
  valor: number;
}

export interface NormalizedClient {
  fullName: string;
  email: string;
  birthDate: string;
  sales: { date: string; amount: number }[];
}
