import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PlayersPage from '@pages/PlayersPage/PlayersPage';
import VerificationPage from '@pages/VerificationPage/VerificationPage';
import FavouritesPage from '@pages/FavouritesPage/FavouritesPage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import MainPage from "@pages/MainPage/MainPage"
import Navigation from '../Navigation/Navigation';


import styles from './App.module.css'
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import PersonPage from '@pages/PersonPage/PersonPage';

const App = () => {

  return ( 
    <div className={styles.header}>
      <Navigation />
      <Routes>
        {/* <Route path='/' exact='true' element={<Navigate to='/players/?page=1' replace />} /> */}
        <Route path='/' exact='true' element={<MainPage />} />
        <Route path='/players' exact='true' element={<PlayersPage />} />
        <Route path='/players/:id' exact='true' element={<PersonPage />} />
        <Route path='/favourites' exact='true' element={<FavouritesPage />} />
        <Route path='/history' exact='true' element={<HistoryPage />} />
        <Route path='*' exact='false' element={<NotFoundPage />} />
        <Route path='/login' exact='true' element={<VerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
