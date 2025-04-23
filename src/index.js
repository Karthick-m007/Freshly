import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import { Background } from './components/Background';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  
    <Navbar />
    <Background/>
    
  
  
  </React.StrictMode>
);


