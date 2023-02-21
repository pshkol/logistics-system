import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import LoadingScreen from '../components/loading-screen/LoadingScreen';

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, isLoading } = useUser();
  const router = useRouter();

  console.log(user || '');

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user && !isLoading) {
    router.replace('/api/auth/login').catch((e) => console.log(e));
  }

  return <>{children}</>;
}
