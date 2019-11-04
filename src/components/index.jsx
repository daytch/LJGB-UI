import React from 'react';
import Header from './layouts/common/headers';
import Footer from './layouts/common/footers';

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
