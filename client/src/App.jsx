import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { BuyCredit, History, Home, Result } from './pages';
import {Footer, Login, Navbar} from './components';
import { AppContext } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-tr from-[#000000] to-purple-950'>
      <Navbar />
      {showLogin &&<Login />}
     <Routes>
  <Route path='/' element={<Home />} />

  <Route path='/result' element={
    <ProtectedRoute>
      <Result />
    </ProtectedRoute>
  } />

  <Route path='/credit' element={
    <ProtectedRoute>
      <BuyCredit />
    </ProtectedRoute>
  } />

  <Route path="/history" element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  } />
</Routes>
      <Footer />
    </div>
  );
};

export default App;
