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

const DashboardPage: React.FC = () => {
  const { clients } = useClients();
  const isMobile = useMediaQuery(1023);

  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%', display: 'flex', gap: '20px', flexDirection: 'column' }}
      >
        {!isMobile ? (
          <>
            <S.Row>
              <CustomPieChart clients={clients} />
              <CustomVerticalChart clients={clients} />
              <CustomHorizontalChart clients={clients} />
            </S.Row>
            <S.Row>
              <CustomTable clients={clients} />
              <Ranking clients={clients} />
            </S.Row>
          </>
        ) : (
          <>
            <SelectChart clients={clients} />
            <CustomTable clients={clients} />
          </>
        )}
      </motion.div>
      <ScrollToTopButton />
    </S.Container>
  );
};

export default DashboardPage;
