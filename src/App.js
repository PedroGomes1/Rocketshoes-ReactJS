import React from 'react';

import { Router } from 'react-router-dom';

import { Provider } from 'react-redux' //Esse provider vai deixar disponível o store da aplicação(estado global) disponível para todos componentes 

import { ToastContainer } from 'react-toastify'

import './config/ReactotronConfig'

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes'
import history from './services/history';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      </Router>
    </Provider>
  );
}

export default App;
