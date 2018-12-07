import React, { Component } from 'react';
import {MyProvider} from './context/Context';

import BigCookie from './components/BigCookie';
import DisplayCookieCount from './components/DisplayCookieCount';
import CookieStore from './components/CookieStore';

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
          <BigCookie />
          <DisplayCookieCount />
          <CookieStore />
        </div>
      </MyProvider>
    );
  }
}

export default App;
