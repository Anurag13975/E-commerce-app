import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
// import toast,{Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '70vh' }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce app - shop now',
  description: 'MERN stack project',
  keywords: 'mern,react,node,mongodb',
  author: 'Anurag Singhal',
};

export default Layout;
