import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserInfo from './screens/UserInfo';

import './app.scss';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
    </QueryClientProvider>
  );
}
