import React from 'react';
import GlobalStyle from './style'
import GlobalIcon from './statics/iconfont/iconfont.js'
import Header from './common/header'
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
      </BrowserRouter>
      <GlobalStyle />
      <GlobalIcon />
    </Provider>
  );
}

export default App;
