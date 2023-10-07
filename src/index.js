import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from "react-query"
import { Provider } from 'react-redux';
import { FilterProvider } from './context/filterContext';
import { store } from './store/Store';
import { ScrollTop } from './components';
import './index.css';
import App from './App';


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
        <FilterProvider >
          <ScrollTop />
          <App />
        </FilterProvider>
        </BrowserRouter> 
      </Provider>
    </QueryClientProvider>
    
  </React.StrictMode>
);

