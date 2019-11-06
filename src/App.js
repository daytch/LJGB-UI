import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import Aplication from './components';
import { Home, Login, PageNotFound, Logout } from './routes';
import Header from './components/layouts/common/headers';

function App() {
  const ComponentToHide = props => {
    const { location } = props;
    if (location.pathname == '/') {
      return null;
    }

    return <Header />;
  };

  const ComponentThatHides = withRouter(ComponentToHide);
  return (
    <div>
      {/* <ComponentThatHides /> */}
      <Aplication>
        {/* <Container> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        {/* </Container> */}
      </Aplication>
    </div>
  );
}

export default App;
