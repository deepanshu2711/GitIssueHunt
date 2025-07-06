"use client"

import { TanStackQueryProvider } from './QueryClientProvider';
import StoreProvider from './StoreProvider';
import { AuthSessionProvider } from './SessionProvider';
import { AuthGuardProvider } from './AuthGuardProvider';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthSessionProvider>
      <StoreProvider>
        <AuthGuardProvider>
          <TanStackQueryProvider>
            <SidebarProvider >
              <AppSidebar />
              <main className="flex-1 bg-gray-50 flex flex-col">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </TanStackQueryProvider>
        </AuthGuardProvider>
      </StoreProvider>
    </AuthSessionProvider>
  );
}

