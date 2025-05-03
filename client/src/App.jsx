import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BuyCredit, Home, Result } from './pages';
import {Footer, Navbar} from './components';

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-tr from-[#000000] to-purple-950'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/credit' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
