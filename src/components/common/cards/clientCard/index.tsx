import * as S from './styles';
import { NormalizedClient } from '@/interfaces/clients';
import getFirstMissingLetter from '@/hooks/useFirstMissingLetter';
import LoadingText from '@/components/loadingText';
import { useLoading } from '@/providers/loadingProvider';

interface ClientCardProps {
  client: NormalizedClient;
}

const ClientCard = ({ client }: ClientCardProps) => {
  const { loading } = useLoading();
  const totalAmount = client.sales.reduce((acc, sale) => acc + sale.amount, 0);
  const totalSales = client.sales.length;

  return (
    <S.Container>
      {loading ? (
        <LoadingText height="70px" width="40px" />
      ) : (
        <S.Avatar>{getFirstMissingLetter(client.fullName)}</S.Avatar>
      )}

      <S.DividerVertical />
      <S.Content>
        {loading ? <LoadingText height="30px" width="140px" /> : <S.Name>{client.fullName}</S.Name>}
        {loading ? (
          <LoadingText height="30px" width="180px" />
        ) : (
          <S.Info>
            Quantidade de Vendas: <strong>{totalSales}</strong>
          </S.Info>
        )}
        {loading ? (
          <LoadingText height="30px" width="170px" />
        ) : (
          <S.Info>
            Total em Vendas: <strong>R$ {totalAmount.toFixed(2)}</strong>
          </S.Info>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ClientCard;
