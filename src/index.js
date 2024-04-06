import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   ReactDOM.render((
   <BrowserRouter basename={process.env.YouTube-Clone-using-React-JS/}>
     <App />
   </BrowserRouter>
), ...)  
  </React.StrictMode>
);

