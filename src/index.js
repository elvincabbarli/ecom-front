import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import CartProvider from './context/CardProvider';
import { Layout } from './layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <CartProvider>
      <Layout>
          <App />
      </Layout>
    </CartProvider>
  </HashRouter>

);


