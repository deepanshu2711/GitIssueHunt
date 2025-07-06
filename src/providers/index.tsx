"use client"

import { TanStackQueryProvider } from './QueryClientProvider';
import { AuthGaurdProvider } from './AuthGuardProvider';
import StoreProvider from './StoreProvider';
import { AuthSessionProvider } from './SessionProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthSessionProvider>
      <StoreProvider>
        <AuthGaurdProvider>
          <TanStackQueryProvider>
            {children}
          </TanStackQueryProvider>
        </AuthGaurdProvider>
      </StoreProvider>
    </AuthSessionProvider>
  );
}

