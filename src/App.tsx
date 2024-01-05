import { QueryClient, QueryClientProvider } from 'react-query';
import CardContent from './components/Card';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen overflow-hidden flex items-center bg-gradient-to-r from-indigo-200 via-gray-200 to-gray-100">
        <CardContent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
