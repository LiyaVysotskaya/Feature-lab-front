import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 5,
      retryDelay: 1000,
    },
  },
});

export default queryClient;
