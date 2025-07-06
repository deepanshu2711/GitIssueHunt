"use client"

import { SessionProvider } from 'next-auth/react';
import { TanStackQueryProvider } from './QueryClientProvider';
import { AuthGaurdProvider } from './AuthGuardProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthGaurdProvider>
        <TanStackQueryProvider>
          {children}
        </TanStackQueryProvider>
      </AuthGaurdProvider>
    </SessionProvider>
  );
}
