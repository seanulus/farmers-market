import React from 'react';
import ProduceList from './ProduceList';
import ScheduleList from './ScheduleList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/schedule' component={ProduceList} />
        <Route path='/produce' component={ScheduleList} />
      </Switch>
    </div>
  );
}

export default App;
