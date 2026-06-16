/**
 * Prefetch Utility Helpers
 * Reusable functions for conditional prefetching with React Query
 */

/**
 * Conditionally prefetch data only if it's not already cached or is stale
 * @param {Object} queryClient - React Query client instance
 * @param {Array|string} queryKey - Query key to check and prefetch
 * @param {Function} queryFn - Function to fetch the data
 * @param {number} staleTime - Stale time in milliseconds
 */
export const conditionalPrefetch = (queryClient, queryKey, queryFn, staleTime) => {
  const cachedData = queryClient.getQueryState(queryKey);
  const isStale = !cachedData || Date.now() - (cachedData.dataUpdatedAt || 0) > staleTime;

  if (isStale) {
    queryClient.prefetchQuery({
      queryKey,
      queryFn,
      staleTime,
    });
  }
};

/**
 * Prefetch multiple queries conditionally
 * @param {Object} queryClient - React Query client instance
 * @param {Array} prefetchConfigs - Array of prefetch configurations
 * @example
 * prefetchMultiple(queryClient, [
 *   { queryKey: ['key1'], queryFn: fetchFn1, staleTime: 30 * 60 * 1000 },
 *   { queryKey: ['key2'], queryFn: fetchFn2, staleTime: 10 * 60 * 1000 },
 * ])
 */
export const prefetchMultiple = (queryClient, prefetchConfigs) => {
  prefetchConfigs.forEach(({ queryKey, queryFn, staleTime }) => {
    conditionalPrefetch(queryClient, queryKey, queryFn, staleTime);
  });
};
