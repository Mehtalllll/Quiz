'use client';
import { ReactNode } from 'react';
import { Navbar } from '../src/Components/Navbar';
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '../src/Redux/Store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider store={reduxStore}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
