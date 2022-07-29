import React from 'react';
import cn from 'classnames'
import styles from './App.module.css'

import { Counter } from '../../features/counter/Counter';

const App = () => {
  return (
    <div className={cn(styles.text)}>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
