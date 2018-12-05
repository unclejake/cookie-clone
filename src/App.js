import React, { Component } from 'react';

import BigCookie from './components/BigCookie';
import DisplayCookieCount from './components/DisplayCookieCount';
import CookieStore from './components/CookieStore';

import {
  incrementCurrentCookies,
  incrementTotalCookies
} from './functions/incrementCookie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCookies: 0,
      totalCookies: 0
    };
    this.cookieClick = this.cookieClick.bind(this);
  }

  cookieClick() {
    this.setState(incrementCurrentCookies);
    this.setState(incrementTotalCookies);
  }

  render() {
    return (
      <div className="App">
        <BigCookie 
          cookieClick={this.cookieClick}
        />
        <DisplayCookieCount 
          currentCookies={this.state.currentCookies}
          totalCookies={this.state.totalCookies}
        />
        <CookieStore
          currentCookies={this.state.currentCookies} 
          totalCookies={this.state.totalCookies}
        />
      </div>
    );
  }
}

export default App;
