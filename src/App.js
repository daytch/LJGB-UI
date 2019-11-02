import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Aplication from './components';
import { Home, Login, PageNotFound } from './routes';

function App() {
  return (
    <Aplication>
      {/* <Container> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      {/* </Container> */}
    </Aplication>
  );
}

export default App;
