import React from 'react';

const MyContext = React.createContext();

const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return {...state, currentCookies: state.currentCookies + 1, totalCookies: state.totalCookies + 1};
    }
};

class MyProvider extends React.Component {
  state = {
    currentCookies: 0,
    totalCookies: 0,
    dispatch: action => {
        this.setState(state => reducer(state, action));
    }
  };
  render() {
    return(
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext, MyProvider};