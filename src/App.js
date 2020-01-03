import React from 'react';

import TablaArticulos from './components/TablaArticulos';
import TablaUbicaciones from './components/TablaUbicaciones';
import BootstrapMediaBadge from './components/BootstrapMediaBadge';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function App() {



  return (
    <Router>
      <BootstrapMediaBadge />
      <Container>
        <h1>Kardex Santomera</h1>
        <hr/>
        <ButtonToolbar className="BotoneraSuperior">
          <LinkContainer to="/articulos"><Button>Artículos</Button></LinkContainer>
          <LinkContainer to="/ubicaciones"><Button>Ubicaciones</Button></LinkContainer>
        </ButtonToolbar>
        <hr />
      

      
      <Switch>
        <Route path="/articulos">
          <TablaArticulos />
        </Route>
        <Route path="/ubicaciones">
          <TablaUbicaciones />
        </Route>

      </Switch>
      </Container>
    </Router>
  );
}




export default App;
