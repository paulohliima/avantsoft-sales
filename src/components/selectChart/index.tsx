import { useState } from 'react';
import * as S from './style';

import CustomHorizontalChart from '@/components/common/charts/horizontalChart';
import CustomPieChart from '@/components/common/charts/pieChart';
import CustomVerticalChart from '@/components/common/charts/verticalChart';
import { ChartProps } from '@/interfaces/charts';

const chartOptions = [
  { label: 'Quantidade de Vendas', value: 'PIE' },
  { label: 'Média de Valor em Vendas', value: 'HORIZONTAL' },
  { label: 'Valor Diário em Vendas', value: 'VERTICAL' },
];

const SelectChart = ({ clients }: ChartProps) => {
  const [selectedChart, setSelectedChart] = useState('PIE');

  const renderChart = () => {
    switch (selectedChart) {
      case 'PIE':
        return <CustomPieChart clients={clients} />;
      case 'HORIZONTAL':
        return <CustomHorizontalChart clients={clients} />;
      case 'VERTICAL':
        return <CustomVerticalChart clients={clients} />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.Select value={selectedChart} onChange={(e) => setSelectedChart(e.target.value)}>
        {chartOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>

      <S.ChartWrapper>{renderChart()}</S.ChartWrapper>
    </S.Container>
  );
};

export default SelectChart;
