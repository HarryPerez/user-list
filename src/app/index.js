import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserInfo from './screens/UserInfo';

import './style.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
    </QueryClientProvider>
  );
}
