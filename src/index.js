import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registration from './CheckoutPage'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ProductProvider } from './ProductContext';
import Pay from './Pay'

const rout = createBrowserRouter([
{
  path: '/',
  element: <App/>
},{
  path:'/registration',
  element: <Registration/>
}
,{
  path:'/pay',
  element: <Pay/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
     <ProductProvider>
      <RouterProvider router={rout}/>
      </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
