import React from 'react';
import GlobalStyle from './style'
import GlobalIcon from './statics/iconfont/iconfont.js'
import Header from './common/header'
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
        <Header />
        <GlobalStyle />
        <GlobalIcon />
    </Provider>
  );
}

export default App;
