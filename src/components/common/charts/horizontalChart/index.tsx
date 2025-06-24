import * as React from 'react';
import * as S from './style';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartProps } from '@/interfaces/charts';

const valueFormatter = (value: number | null) => {
  return value !== null ? `R$ ${value.toFixed(0)}` : '-';
};

const chartSetting = {
  xAxis: [
    {
      label: 'Média por Venda (R$)',
    },
  ],
  height: 300,
  width: 320,
  yAxis: [
    {
      dataKey: 'client',
      width: 100,
    },
  ],
};

const CustomHorizontalChart = ({ clients }: ChartProps) => {
  const dataset = clients.map((client) => {
    const total = client.sales.reduce((acc, sale) => acc + sale.amount, 0);
    const count = client.sales.length;
    const avg = count > 0 ? total / count : 0;

    return {
      client: client.fullName,
      avgSale: avg,
    };
  });

  return (
    <S.Container>
      <S.Title>Média de Valor por Venda</S.Title>
      <BarChart
        dataset={dataset}
        yAxis={chartSetting.yAxis}
        series={[
          {
            dataKey: 'avgSale',
            label: 'Média por Venda',
            valueFormatter,
          },
        ]}
        barLabel={(item) =>
          item.value !== undefined && item.value && item.value > 0 ? valueFormatter(item.value) : null
        }
        layout="horizontal"
        height={chartSetting.height}
        width={chartSetting.width}
      />
    </S.Container>
  );
};

export default CustomHorizontalChart;
