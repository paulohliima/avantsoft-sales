import * as React from 'react';
import * as S from './style';

import { ChartProps } from '@/interfaces/charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const CustomPieChart = ({ clients }: ChartProps) => {
  const pieData = clients.map((client) => ({
    label: client.fullName.split(' ')[0],
    value: client.sales.length,
  }));

  const size = {
    width: 200,
    height: 200,
  };

  return (
    <S.Container>
      <S.Title>Quantidade Total de Vendas</S.Title>
      <PieChart
        series={[
          {
            data: pieData,
            arcLabel: (item) => `${item.value}`,
            arcLabelMinAngle: 15,
            arcLabelRadius: '60%',
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold',
            fontSize: 12,
          },
        }}
        {...size}
      />
    </S.Container>
  );
};

export default CustomPieChart;
