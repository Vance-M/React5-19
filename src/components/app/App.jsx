import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Xmen from '../../containers/xmen';
import CharacterDetail from '../stuff/CharacterDetail';
import Header from '../stuff/Header';


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <Xmen {...routerProps} />} 
          />
          <Route
            path="/:Xmenid"
            exact
            component={CharacterDetail}
          />
        </Switch>
      </Router>
    </div>
  );
}
