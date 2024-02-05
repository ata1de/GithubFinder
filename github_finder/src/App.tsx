// App.tsx
import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import classes from './style/App.module.css';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && (
          <Link to="/" className={`${classes.goBackButton} ${classes.alignLeft}`}>
            Voltar
          </Link>
      )}
      <div className={classes.app}>
        <header>
          <h1>
            Github Finder
          </h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
