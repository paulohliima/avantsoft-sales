import type { AppProps } from 'next/app';
import '@/utils/yupTranslations';

import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { StyledEngineProvider } from '@mui/material/styles';

import Provider from '@/providers';
import { Footer } from '@/components/footer';
import { GlobalStyles, Reset, RootVariables } from '@/styles';
import { Header } from '@/components/header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Provider>
          <ToastContainer position="bottom-center" draggable />
          <Reset />
          <GlobalStyles />
          <RootVariables />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </StyledEngineProvider>
    </>
  );
}
