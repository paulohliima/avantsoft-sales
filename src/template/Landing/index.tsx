import * as S from './styles';
import Typewriter from 'typewriter-effect';
import FormLogin from '@/components/common/forms/formLogin';
import CustomButton from '@/components/common/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

const LandingPage: React.FC = () => {
  const isMobile = useMediaQuery(767);

  const [openFormLogin, setOpenFormLogin] = useState(false);

  return (
    <S.Container>
      {isMobile ? (
        <AnimatePresence mode="wait">
          {openFormLogin ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <FormLogin />
            </motion.div>
          ) : (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <S.Column>
                <S.ImageLanding src="/assets/images/background-landing.png" />
                <S.ContainerText>
                  <S.Text>Sua plataforma de gestão de vendas</S.Text>
                  <S.TypeWritter>
                    <Typewriter
                      options={{
                        strings: ['Completa', 'Segura', 'Intuitiva', 'Rápida', 'Confiável', 'Automática'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </S.TypeWritter>
                </S.ContainerText>
                <CustomButton
                  onClick={() => setOpenFormLogin(true)}
                  label="Entrar"
                  variant="stylized"
                  sxStyle={{ padding: '4px 30px' }}
                />
              </S.Column>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
            <FormLogin />
            <S.Column>
              <S.ImageLanding src="/assets/images/background-landing.png" />
              <S.ContainerText>
                <S.Text>Sua plataforma de gestão de vendas</S.Text>
                <S.TypeWritter>
                  <Typewriter
                    options={{
                      strings: ['Completa', 'Segura', 'Intuitiva', 'Rápida', 'Confiável', 'Automática'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </S.TypeWritter>
              </S.ContainerText>
            </S.Column>
          </motion.div>
        </AnimatePresence>
      )}
    </S.Container>
  );
};

export default LandingPage;
