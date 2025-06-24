import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/providers/authProvider';

const withoutAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithoutAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
      if (!loading && isAuthenticated) {
        router.replace('/dashboard');
      }
    }, [isAuthenticated, loading]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithoutAuth;
};

export default withoutAuth;
