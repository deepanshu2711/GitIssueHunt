"use client"

import { TanStackQueryProvider } from './QueryClientProvider';
import StoreProvider from './StoreProvider';
import { AuthSessionProvider } from './SessionProvider';
import { AuthGuardProvider } from './AuthGuardProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthSessionProvider>
      <StoreProvider>
        <AuthGuardProvider>
          <TanStackQueryProvider>
            {children}
          </TanStackQueryProvider>
        </AuthGuardProvider>
      </StoreProvider>
    </AuthSessionProvider>
  );
}

