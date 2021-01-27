import React from 'react';
import { Container } from './Container/Container';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from '../pages/Home/Home';
import { Cart } from '../pages/Cart/Cart';
import { loaderStore } from '../store/loader';
import { Loader } from './Loader/Loader';
import { observer } from 'mobx-react';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Container>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/cart" component={Cart} exact />
            </Switch>
          </Container>
        </main>
      </div>
      {loaderStore.isVisible && <Loader />}
    </>
  );
};

export default observer(App);
