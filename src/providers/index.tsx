import { AuthProvider } from './authProvider';
import { ClientsProvider } from './clientsProvider';
import { LoadingProvider } from './loadingProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Provider = ({ children }: any) => {
  return (
    <>
      <AuthProvider>
        <ClientsProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </ClientsProvider>
      </AuthProvider>
    </>
  );
};

export default Provider;
