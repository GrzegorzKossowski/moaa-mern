import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
