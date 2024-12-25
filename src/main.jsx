import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';

// buat Elemen React
const heading = React.createElement('h1', null, 'Biodata Perusahaan');
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');

const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
const container = React.createElement('div', null, [heading, unorderedList]);

// Gabungkan App dan container
const combinedContent = React.createElement('div', null, [
  React.createElement(App, null), // Komponen App
  container,                     // Elemen container
]);

// Render ke DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {combinedContent}
  </StrictMode>
);
