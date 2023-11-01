import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FilterProvider } from './context/filterContext';
import { store } from './store/Store';
import { ScrollTop } from './components';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <FilterProvider >
          <ScrollTop />
          <App />
        </FilterProvider>
        </BrowserRouter> 
      </Provider>
  </React.StrictMode>
);

