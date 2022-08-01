import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import PlayersPage from '@pages/PlayersPage/PlayersPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import SignupPage from '@pages/SignupPage/SignupPage';
import FavouritesPage from '@pages/FavouritesPage/FavouritesPage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import MainPage from "@pages/MainPage/MainPage"
import StartPage from "@pages/StartPage/StartPage"
import Navigation from '../Navigation/Navigation';
import PersonPage from '@pages/PersonPage/PersonPage';

import styles from './App.module.css'

const App = () => {
  const storeData = useSelector((state) => state.isLogin);

  return (
    <div className={styles.header}>
      <Navigation isLogin={storeData.isLogin} />
      <Routes>
        {storeData.isLogin ? (
          <>
            <Route path='/' exact='true' element={<MainPage />} />
            <Route path='/players' exact='true' element={<PlayersPage />} />
            <Route path='/players/:id' exact='true' element={<PersonPage />} />
            <Route path='/favourites' exact='true' element={<FavouritesPage />} />
            <Route path='/history' exact='true' element={<HistoryPage />} />
            <Route path='*' exact='false' element={<Navigate to="/" replace />} />
            {/* <Route path='/login' exact='true' element={<VerificationPage />} /> */}
          </>
        ) : ( 
          <>
            <Route path='/' exact='true' element={<StartPage />} />
            <Route path='/login' exact='true' element={<LoginPage />} />
            <Route path='/signup' exact='true' element={<SignupPage />} />
            <Route path='*' exact='false' element={<Navigate to="/" replace />} />
          </>
        )
        }
      </Routes>
    </div>
  );
}

export default App;
