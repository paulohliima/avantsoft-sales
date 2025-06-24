import * as S from './style';

import { useRouter } from 'next/router';

import Logo from '@/components/common/logo';
import CustomButton from '../common/button';
import LogoutIcon from '@mui/icons-material/Logout';

import useMediaQuery from '@/hooks/useMediaQuery';
import { useAuth } from '@/providers/authProvider';

export const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery();

  const { isAuthenticated, logout } = useAuth();

  return (
    <S.Container $isLogged={isAuthenticated} $isMobile={isMobile}>
      <Logo onClick={() => router.push('/')} />
      {!isMobile && isAuthenticated && (
        <S.Row>
          <CustomButton label="Sair" variant="text" color="var(--color-profile-2)" onClick={logout} />
        </S.Row>
      )}
      {isMobile && isAuthenticated && (
        <S.Row>
          <LogoutIcon onClick={logout} style={{ color: 'var(--color-profile-2)', position: 'absolute', right: 30 }} />
        </S.Row>
      )}
    </S.Container>
  );
};
