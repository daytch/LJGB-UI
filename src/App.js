import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Aplication from './components';
import {
  Home,
  Login,
  PageNotFound,
  Logout,
  Search,
  Transaction,
  Profile,
  ChangePassword
} from './routes';
import Detail from './routes/detail';

function App() {
  return (
    <div>
      <Aplication>
        {/* <Container> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        {/* </Container> */}
      </Aplication>
    </div>
  );
}

export default App;
