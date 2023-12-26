import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/rockets" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/my-profile" component={MyProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
