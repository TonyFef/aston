import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PlayersPage from '@pages/PlayersPage/PlayersPage';
import VerificationPage from '../../pages/VerificationPage/VerificationPage';
import Navigation from '../Navigation/Navigation';

import styles from './App.module.css'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

// import { options } from '../../env/api';

const App = () => {
  // const API_ROOT = 'https://free-nba.p.rapidapi.com/';
  // const API_PLAYERS = 'players';
  // const API_PAGE = 0;
  // const API_PERPAGE = 10;
  // fetch(`${API_ROOT}${API_PLAYERS}?page=1&per_page=${API_PERPAGE}`, options).then(res => res.json()).then(data => {
  //   console.log(data);
  // })

  return (
    <div className={styles.header}>
      <Navigation />
      <Routes>
        <Route path='/' exact='true' element={<Navigate to='/players/?page=1' replace />} />
        <Route path='/players' exact='true' element={<PlayersPage />} />
        <Route path='/favourites' exact='true' />
        <Route path='/history' exact='true' />
        <Route path='*' exact='false' element={<NotFoundPage />} />
        <Route path='/login' exact='true' element={<VerificationPage />} />
      </Routes>



      {/* <PlayersPage /> */}
    </div>
  );
}

export default App;
