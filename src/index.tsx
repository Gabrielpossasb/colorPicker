import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppColor } from './Appcolor';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppColor />
  </React.StrictMode>
);

