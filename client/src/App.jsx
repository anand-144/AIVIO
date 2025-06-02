import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { BuyCredit, Home, Result } from './pages';
import {Footer, Login, Navbar} from './components';
import { AppContext } from './context/AppContext';

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-tr from-[#000000] to-purple-950'>
      <Navbar />
      {showLogin &&<Login />}
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
