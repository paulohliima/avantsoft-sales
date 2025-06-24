import { render, screen } from '@testing-library/react';

import { ClientsProvider } from '@/providers/clientsProvider';
import { NormalizedClient } from '@/interfaces/clients';
import { LoadingProvider } from '@/providers/loadingProvider';
import CustomTable from '@/components/common/table';

describe('Tabela de clientes', () => {
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

  it('renderiza os clientes na tabela', () => {
    render(
      <LoadingProvider>
        <ClientsProvider>
          <CustomTable clients={clients} />
        </ClientsProvider>
      </LoadingProvider>
    );

    expect(screen.getByText('Maria Souza')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
