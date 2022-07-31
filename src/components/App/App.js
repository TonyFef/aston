import React from 'react';
import PlayersPage from '../../pages/PlayersPage/PlayersPage';
import styles from './App.module.css'

const App = () => {

  return (
    <div className={styles.header}>
      <PlayersPage />
    </div>
  );
}

export default App;
