import { useQuery } from '@tanstack/react-query';
import fetchData from '../helper/fetch';
import { useEffect } from 'react';

function useCountryChart(CountryId = '') {
  let useQueryInstance = useQuery({
    queryKey: ['Country', CountryId],
    queryFn: async () => fetchData(`/chart/${CountryId}`),
    // refetchInterval: 1000
  });

  const { refetch } = useQueryInstance;

  useEffect(() => {
    const interval = setInterval(() => refetch(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [refetch]);

  return useQueryInstance;
}

export default useCountryChart;
