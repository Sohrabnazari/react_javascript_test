import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropTypes } from 'prop-types';

const queryClient = new QueryClient()

function CustomQueryClientProvider({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	)
}

export { queryClient };
export default CustomQueryClientProvider