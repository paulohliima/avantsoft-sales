import { useState } from 'react';
import { NormalizedClient } from '@/interfaces/clients';
import * as S from './styles';
import ClientCard from '../../cards/clientCard';
import CustomButton from '@/components/common/button'; // ou use seu botão padrão

interface ListCardsClientsProps {
  clients: NormalizedClient[];
}

const ListCardsClients = ({ clients }: ListCardsClientsProps) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const hasMore = visibleCount < clients.length;

  return (
    <S.Container>
      {clients.slice(0, visibleCount).map((client, index) => (
        <ClientCard client={client} key={index} />
      ))}

      {hasMore && (
        <S.ButtonWrapper>
          <CustomButton label="Carregar mais" variant="text" onClick={handleLoadMore} />
        </S.ButtonWrapper>
      )}
    </S.Container>
  );
};

export default ListCardsClients;
