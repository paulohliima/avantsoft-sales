import * as S from './styles';

import { motion } from 'framer-motion';

import ScrollToTopButton from '@/components/scrollToTopButton';
import CustomTable from '@/components/common/table';
import { useClients } from '@/providers/clientsProvider';
import CustomPieChart from '@/components/common/charts/pieChart';
import CustomVerticalChart from '@/components/common/charts/verticalChart';
import CustomHorizontalChart from '@/components/common/charts/horizontalChart';
import SelectChart from '@/components/selectChart';
import useMediaQuery from '@/hooks/useMediaQuery';
import Ranking from '@/components/ranking';
import { useState } from 'react';
import CustomButton from '@/components/common/button';
import ClientModal from '@/components/common/modals/clientModal';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { clientService } from '@/services/clientService';
import { IClientRequest } from '@/interfaces/clients';
import { useLoading } from '@/providers/loadingProvider';
import ListCardsClients from '@/components/common/lists/listCardsClients';

const DashboardPage: React.FC = () => {
  const { clientFiltered, clients, setClientFiltered, fetchClients } = useClients();
  const { setLoading } = useLoading();
  const { create } = clientService;
  const isMobile = useMediaQuery(1023);

  const [openModalClient, setOpenModalClient] = useState(false);

  const handleNewClient = async (data: IClientRequest) => {
    try {
      setLoading(true);
      const newClient = {
        email: data.email,
        nascimento: data.nascimento,
        nomeCompleto: data.nomeCompleto,
        vendasAleatorias: data.vendasAleatorias,
      };

      await create(newClient);
      fetchClients();

      setLoading(false);
      toast.success('Cliente Criado com Sucesso!');
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        const message = e.response?.data?.message || 'Problemas de conexão. Tente mais tarde.';
        toast.error(message);
      } else if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  const handleClearFilters = () => {
    setLoading(true);
    setTimeout(() => {
      setClientFiltered(clients);
      setLoading(false);
    }, 500);
  };

  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          maxWidth: '1000px',
          alignItems: 'center',
        }}
      >
        <S.RowButtons>
          <CustomButton label="Redefinir Filtros" variant="text" onClick={handleClearFilters} />
          <CustomButton label="Adicionar Cliente" iconType="new" onClick={() => setOpenModalClient(true)} />
        </S.RowButtons>
        {!isMobile ? (
          <>
            <S.Row>
              <CustomPieChart clients={clientFiltered} />
              <CustomVerticalChart clients={clientFiltered} />
              <CustomHorizontalChart clients={clientFiltered} />
            </S.Row>
            <S.DividerRow />
            <S.Row>
              <CustomTable clients={clients} />
              <Ranking clients={clientFiltered} />
            </S.Row>
          </>
        ) : (
          <>
            <SelectChart clients={clientFiltered} />
            <S.DividerRow />
            <S.ContainerListCards>
              <ListCardsClients clients={clients} />
            </S.ContainerListCards>
            <S.ContainerTable>
              <CustomTable clients={clients} />
            </S.ContainerTable>
          </>
        )}
      </motion.div>
      <ScrollToTopButton />
      <ClientModal
        open={openModalClient}
        handleClose={() => setOpenModalClient(false)}
        handleConfirm={handleNewClient}
      />
    </S.Container>
  );
};

export default DashboardPage;
