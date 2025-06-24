import { render, screen } from '@testing-library/react';

import { NormalizedClient } from '@/interfaces/clients';
import { ClientsProvider } from '@/providers/clientsProvider';
import { LoadingProvider } from '@/providers/loadingProvider';
import ListCardsClients from '@/components/common/lists/listCardsClients';

describe('Lista de Cards de Clientes', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  const clients: NormalizedClient[] = [
    {
      fullName: 'Maria Souza',
      email: 'maria.souza@example.com',
      birthDate: '1990-04-15',
      sales: [
        { date: '2025-06-01', amount: 120.5 },
        { date: '2025-06-10', amount: 89.9 },
      ],
    },
    {
      fullName: 'João Silva',
      email: 'joao.silva@example.com',
      birthDate: '1985-09-30',
      sales: [{ date: '2025-06-05', amount: 230.0 }],
    },
  ];

  it('renderiza os clientes na lista de card', () => {
    render(
      <LoadingProvider>
        <ClientsProvider>
          <ListCardsClients clients={clients} />
        </ClientsProvider>
      </LoadingProvider>
    );

    expect(screen.getByText('Maria Souza')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
