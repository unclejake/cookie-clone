import React, { Component } from 'react';
import {MyProvider} from './context/Context';

import BigCookie from './components/BigCookie';
import DisplayCookieCount from './components/DisplayCookieCount';
import CookieStore from './components/CookieStore';

import {
  incrementCurrentCookies,
  incrementTotalCookies
} from './functions/changeCookieAmount';

class App extends Component {

  constructor(props) {
    super(props);
    this.cookieClick = this.cookieClick.bind(this);
  }

  cookieClick() {
    this.setState(incrementCurrentCookies);
    this.setState(incrementTotalCookies);
  }

  render() {
    return (
      <MyProvider>
      <div className="App">
        <BigCookie 
          cookieClick={this.cookieClick}
        />
        <DisplayCookieCount />
        <CookieStore />
      </div>
      </MyProvider>
    );
  }
}

export default App;
