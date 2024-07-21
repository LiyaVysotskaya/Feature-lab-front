import { QueryClient } from '@tanstack/react-query';
// import { persistQueryClient } from '@tanstack/react-query-persist-client';
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 5,
      retryDelay: 1000,
    },
  },
});

// localstorage persisting disabled for easy testing

// const localStoragePersister = createSyncStoragePersister({
//   storage: window.localStorage,
// });

// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// });

export default queryClient;
