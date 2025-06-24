import { useEffect, useState, useMemo } from 'react';
import * as S from './style';

import CustomHorizontalChart from '@/components/common/charts/horizontalChart';
import CustomPieChart from '@/components/common/charts/pieChart';
import CustomVerticalChart from '@/components/common/charts/verticalChart';
import { ChartProps } from '@/interfaces/charts';
import Ranking from '../ranking';
import useMediaQuery from '@/hooks/useMediaQuery';

const chartOptions = [
  { label: 'Quantidade de Vendas', value: 'PIE' },
  { label: 'Média de Valor em Vendas', value: 'HORIZONTAL' },
  { label: 'Valor Diário em Vendas', value: 'VERTICAL' },
  { label: 'Ranking', value: 'RANKING' },
];

const SelectChart = ({ clients }: ChartProps) => {
  const isMobile = useMediaQuery();
  const [selectedChart, setSelectedChart] = useState('PIE');

  // Atualiza o valor padrão ao detectar mobile
  useEffect(() => {
    if (!isMobile && selectedChart === 'RANKING') {
      setSelectedChart('PIE');
    }
  }, [isMobile, selectedChart]);

  // Filtra opções conforme o dispositivo
  const filteredChartOptions = useMemo(() => {
    return !isMobile ? chartOptions.filter((opt) => opt.value !== 'RANKING') : chartOptions;
  }, [isMobile]);

  const renderChart = () => {
    switch (selectedChart) {
      case 'PIE':
        return <CustomPieChart clients={clients} />;
      case 'HORIZONTAL':
        return <CustomHorizontalChart clients={clients} />;
      case 'VERTICAL':
        return <CustomVerticalChart clients={clients} />;
      case 'RANKING':
        return <Ranking clients={clients} />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.Select value={selectedChart} onChange={(e) => setSelectedChart(e.target.value)}>
        {filteredChartOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>

      <S.Row>
        <S.ChartWrapper>{renderChart()}</S.ChartWrapper>
        {!isMobile && (
          <S.ContainerRanking>
            <Ranking clients={clients} />
          </S.ContainerRanking>
        )}
      </S.Row>
    </S.Container>
  );
};

export default SelectChart;
