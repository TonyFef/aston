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
import TeamPage from '@pages/TeamPage/TeamPage';

import styles from './App.module.css'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const App = () => {
  const storeData = useSelector((state) => state.isLogin);
  const storeDataUsers = useSelector((state) => state.users);

  return (
    <div className={styles.header}>
      <Navigation isLogin={storeData} />

      <Routes>
        {storeData ? (
          <>
            <Route path='/' exact='true' element={
              <>
                <ErrorBoundary>
                  <MainPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/players' exact='true' element={
              <>
                <ErrorBoundary>
                  <PlayersPage />
                </ErrorBoundary>
              </>
            } />

            <Route path='/players/:id' exact='true' element={
              <>
                <ErrorBoundary>
                  <PersonPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/teams/:id' exact='true' element={
              <>
                <ErrorBoundary>
                  <TeamPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/favourites' exact='true' element={
              <>
                <ErrorBoundary>
                  <FavouritesPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/history' exact='true' element={
              <>
                <ErrorBoundary>
                  <HistoryPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='*' exact='false' element={
              <>
                <ErrorBoundary>
                  <Navigate to="/" replace />
                </ErrorBoundary>
              </>
            } />
          </>
        ) : (
          <>
            <Route path='/' exact='true' element={
              <>
                <ErrorBoundary>
                  <StartPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/login' exact='true' element={
              <>
                <ErrorBoundary>
                  <LoginPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='/signup' exact='true' element={
              <>
                <ErrorBoundary>
                  <SignupPage />
                </ErrorBoundary>
              </>
            } />
            <Route path='*' exact='false' element={
              <>
                <ErrorBoundary>
                  <Navigate to="/" replace />
                </ErrorBoundary>
              </>
            } />
          </>
        )
        }
      </Routes>
    </div>
  );
}

export default App;
