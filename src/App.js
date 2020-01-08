import React from 'react';

import TablaArticulos from 'components/TablaArticulos';
import TablaUbicaciones from 'components/TablaUbicaciones';
import Navigation from 'components/Navigation';
import useStateWithLocalStorage from 'util/useStateWithLocalStorage';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {

  const [baseUrl, setBaseUrl] = useStateWithLocalStorage('baseUrl', 'https://orackardex-scan.hefame.es:8123');


  const optionsChanged = (options) => {
    setBaseUrl(options.baseUrl);
  }

  return (
    <Router>
      <Navigation baseUrl={baseUrl} onOptionsChanged={optionsChanged} />
      
      <Container style={{marginTop: '80px'}}>
        <Switch>
          <Route path="/articulos">
            <TablaArticulos baseUrl={baseUrl} />
          </Route>
          <Route path="/ubicaciones">
            <TablaUbicaciones baseUrl={baseUrl}s />
          </Route>

        </Switch>
      </Container>
    </Router>
  );
}




export default App;
