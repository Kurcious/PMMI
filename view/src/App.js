import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './css/custom.css'
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Layout />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
