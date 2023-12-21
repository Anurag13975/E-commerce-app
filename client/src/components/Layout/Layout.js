import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '70vh' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
