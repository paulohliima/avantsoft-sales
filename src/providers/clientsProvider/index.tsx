import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { clientService } from '@/services/clientService';
import { normalizeClients } from '@/utils/normalizeClients';
import { NormalizedClient } from '@/interfaces/clients';

interface ClientsContextType {
  clients: NormalizedClient[];
  setClients: (clients: NormalizedClient[]) => void;
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

export const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<NormalizedClient[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientService.getAll();
        const rawClients = response.data.clientes;
        const normalized = normalizeClients(rawClients);
        return setClients(normalized);
      } catch (err) {
        console.error('Erro ao buscar clientes:', err);
      }
    };

    fetchClients();
  }, []);

  return <ClientsContext.Provider value={{ clients, setClients }}>{children}</ClientsContext.Provider>;
};

export const useClients = () => {
  const context = useContext(ClientsContext);
  if (!context) throw new Error('useClients must be used within a ClientsProvider');
  return context;
};
