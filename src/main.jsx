import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';

//variable di jsx 
const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      <img src="https://raw.githubusercontent.com/dicodingacademy/BelajarDasarPemrogramanWeb/099-shared-files/dicoding-logo.png" alt="Logo Dicoding" />
    </ul>
  </div>
);

// Gabungkan App dan container
const combinedContent = React.createElement('div', null, [
  React.createElement(App, null), // Komponen App
  element
]);

// Render ke DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {combinedContent}
  </StrictMode>
);
