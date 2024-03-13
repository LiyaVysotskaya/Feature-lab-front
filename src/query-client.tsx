import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 60 * 1000, // data is definetly fresh fo next 60 min
      // gcTime: 2 * 60 * 60 * 1000, // cash will be deleted after 120 min (garbage collection time)
      refetchOnWindowFocus: true,
      retry: 5,
      retryDelay: 1000,
    },
  },
});

export default queryClient;
