// Aqui es donde voy a agregar Browser router y voy a poner mis rutas

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/badges" component={Badges} />
              <Route exact path="/badges/new" component={BadgeNew} />
              <Route exact path="/badges/:badgeId" component={BadgeDetails} />
              <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
              <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>  
    );
}

export default App;