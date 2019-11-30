import React from 'react';
import Header from './layouts/common/headers';
import Footer from './layouts/common/footers';

const App = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 62px)' }}>{children}</div>
      <Footer />
    </>
  );
};

export default App;
