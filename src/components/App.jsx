import React from 'react';
import HomePage from './HomePage';
import ProduceList from './ProduceList';
import ScheduleList from './ScheduleList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/schedule' component={ScheduleList} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
    </div>
  );
}

export default App;
