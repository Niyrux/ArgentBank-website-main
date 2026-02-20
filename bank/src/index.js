import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './components/store/store'; 
import './index.css';
import App from './App';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

