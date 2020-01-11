import React from 'react';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {settings} from '../../data/dataStore';

const App = () => (

  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={settings.navigationPaths.home} component={Home} />
        <Route exact path={settings.navigationPaths.info} component={Info} />
        <Route exact path={settings.navigationPaths.faq} component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;