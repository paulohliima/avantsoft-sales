import * as S from './styles';
import React, { useMemo, useRef } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface NormalizedClient {
  fullName: string;
  email: string;
  birthDate: string;
  sales: { date: string; amount: number }[];
}

interface RankingProps {
  clients: NormalizedClient[];
}

const Ranking: React.FC<RankingProps> = ({ clients }) => {
  const clientsRef = useRef<NormalizedClient[] | null>(null);

  if (!clientsRef.current && clients.length > 0) {
    clientsRef.current = [...clients];
  }

  const listClients = clientsRef.current ?? [];

  // Cliente com maior volume total de vendas (soma de valores)
  const topVolume = useMemo(() => {
    if (listClients.length === 0) return null;
    return listClients.reduce((maxClient, client) => {
      const total = client.sales.reduce((acc, sale) => acc + sale.amount, 0);
      const maxTotal = maxClient ? maxClient.sales.reduce((acc, sale) => acc + sale.amount, 0) : 0;
      return total > maxTotal ? client : maxClient;
    }, null as NormalizedClient | null);
  }, [listClients]);

  // Cliente com maior média de valor por venda
  const topAverage = useMemo(() => {
    if (listClients.length === 0) return null;
    return listClients.reduce((maxClient, client) => {
      const total = client.sales.reduce((acc, sale) => acc + sale.amount, 0);
      const count = client.sales.length;
      const average = count > 0 ? total / count : 0;

      if (!maxClient) return client;

      const maxTotal = maxClient.sales.reduce((acc, sale) => acc + sale.amount, 0);
      const maxCount = maxClient.sales.length;
      const maxAverage = maxCount > 0 ? maxTotal / maxCount : 0;

      return average > maxAverage ? client : maxClient;
    }, null as NormalizedClient | null);
  }, [listClients]);

  // Cliente com maior frequência de vendas (quantidade de vendas)
  const topFrequency = useMemo(() => {
    if (listClients.length === 0) return null;
    return listClients.reduce((maxClient, client) => {
      return client.sales.length > (maxClient?.sales.length || 0) ? client : maxClient;
    }, null as NormalizedClient | null);
  }, [listClients]);

  if (!listClients.length) {
    return <p>Nenhum cliente disponível.</p>;
  }

  // Helper para formatar valores em R$
  const formatCurrency = (value: number) => `R$ ${value.toFixed(2)}`;

  return (
    <S.Container>
      <S.ContainerTitle>
        <EmojiEventsIcon style={{ color: '#fcba0a' }} />
        <S.CardTitle style={{ color: '#fff' }}>Ranking</S.CardTitle>
        <EmojiEventsIcon style={{ color: '#fcba0a' }} />
      </S.ContainerTitle>
      <S.Card>
        <S.BadgeImgLeft src={'assets/images/crownBadge.png'} />
        <S.ContainerCard>
          <S.CardTitle>Maior Volume de Vendas</S.CardTitle>
          {topVolume ? (
            <>
              <S.Name>{topVolume.fullName}</S.Name>
              <S.Info>Vendas: {topVolume.sales.length}</S.Info>
            </>
          ) : (
            <S.Info>Sem dados</S.Info>
          )}
        </S.ContainerCard>
        <S.BadgeImgRight src={'assets/images/crownBadge.png'} />
      </S.Card>

      <S.Card>
        <S.BadgeImgLeft src={'assets/images/crownBadge.png'} />
        <S.ContainerCard>
          <S.CardTitle>Maior Média por Venda</S.CardTitle>
          {topAverage ? (
            <>
              <S.Name>{topAverage.fullName}</S.Name>
              <S.Info>
                Média:{' '}
                {formatCurrency(
                  topAverage.sales.length > 0
                    ? topAverage.sales.reduce((acc, s) => acc + s.amount, 0) / topAverage.sales.length
                    : 0
                )}
              </S.Info>
            </>
          ) : (
            <S.Info>Sem dados</S.Info>
          )}
        </S.ContainerCard>
        <S.BadgeImgRight src={'assets/images/crownBadge.png'} />
      </S.Card>

      <S.Card>
        <S.BadgeImgLeft src={'assets/images/crownBadge.png'} />
        <S.ContainerCard>
          <S.CardTitle>Maior Frequência de Vendas</S.CardTitle>
          {topFrequency ? (
            <>
              <S.Name>{topFrequency.fullName}</S.Name>
              <S.Info>Vendas: {topFrequency.sales.length}</S.Info>
            </>
          ) : (
            <S.Info>Sem dados</S.Info>
          )}
        </S.ContainerCard>
        <S.BadgeImgRight src={'assets/images/crownBadge.png'} />
      </S.Card>
    </S.Container>
  );
};

export default Ranking;
