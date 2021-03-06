import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from 'styles/global';
import { Home, Around, Detail, Likes, Search } from 'pages/index';

const App = () => {
  const { isOpen } = useSelector(state => state.overlay);

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <HashRouter basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/around">
            <Around />
          </Route>
          <Route
            exact
            path="/detail/:id"
            render={({ match }) => (
              <Detail key={match.params.id} match={match} />
            )}
          />
          <Route path="/likes">
            <Likes />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
