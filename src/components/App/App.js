import React from 'react';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import {BrowserRouter, Route} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';

const App = () => (

  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path={settings.navigationPaths.home} component={Home} />
        <Route exact path={settings.navigationPaths.info} component={Info} />
        <Route exact path={settings.navigationPaths.faq} component={FAQ} />
        <Route exact path="/list/:id" component={List} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;