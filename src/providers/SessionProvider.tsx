"use client"

import { SessionProvider } from 'next-auth/react';

export const AuthSessionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
