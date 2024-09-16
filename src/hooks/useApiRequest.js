import { useCallback, useState } from 'react';

export default function useApiRequest(apiFunction, options) {
  const { initialData = null } = options || {};

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // options: {onSuccess, onError}
  const execute = useCallback(
    async (params, executeOptions) => {
      const { onSuccess, onError } = executeOptions || {};
      try {
        setIsLoading(true);
        setError(null);

        await new Promise(resolver => setTimeout(resolver, 1000));
        const response = await apiFunction(params);
        setData(response.data);
        if (onSuccess) {
          onSuccess(response);
        }
      } catch (err) {
        setError(err);
        if (onError) {
          onError(err);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [apiFunction],
  );

  return {
    isLoading,
    error,
    data,
    execute,
  };
}
