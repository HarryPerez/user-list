import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import UserInfo from "./screens/UserInfo";

import "./app.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
    </QueryClientProvider>
  );
}
