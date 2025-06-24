import * as React from 'react';
import * as S from './style';
import { BarChart } from '@mui/x-charts/BarChart';
import dayjs from 'dayjs';
import { ChartProps } from '@/interfaces/charts';

const CustomVerticalChart = ({ clients }: ChartProps) => {
  const [startDate, setStartDate] = React.useState<string>(dayjs().format('YYYY-MM-DD'));

  const last7Days = React.useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) =>
        dayjs(startDate)
          .subtract(6 - i, 'day')
          .format('YYYY-MM-DD')
      ),
    [startDate]
  );

  const salesByDate = last7Days.reduce<Record<string, number>>((acc, date) => {
    acc[date] = 0;
    return acc;
  }, {});

  clients.forEach((client) => {
    client.sales.forEach((sale) => {
      const date = dayjs(sale.date).format('YYYY-MM-DD');
      if (salesByDate[date] !== undefined) {
        salesByDate[date] += sale.amount;
      }
    });
  });

  const dataset = last7Days.map((date) => ({
    data: dayjs(date).format('DD/MM'),
    total: salesByDate[date],
  }));

  return (
    <S.Container>
      <S.Title>Valor Diário em Vendas</S.Title>

      <S.DateInputWrapper>
        <label htmlFor="date">Data Inicial: </label>
        <input id="date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </S.DateInputWrapper>

      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: 'data', label: 'Dia' }]}
        series={[{ dataKey: 'total', label: 'Total de Vendas', valueFormatter: (v) => `R$ ${v}` }]}
        barLabel={(item, context) => {
          return context.bar.height <= 0 ? null : item.value?.toString();
        }}
        yAxis={[{ label: 'Valor (R$)', width: 50 }]}
        height={300}
        width={320}
      />
    </S.Container>
  );
};

export default CustomVerticalChart;
