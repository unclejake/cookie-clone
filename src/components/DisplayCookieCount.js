import React from 'react';

class DisplayCookieCount extends React.Component {

    render() {
        return(
            <div>
                <h2>Current Cookies: {this.props.currentCookies}</h2>
                <h2>Total Cookies: {this.props.totalCookies}</h2>
            </div>
        );
    }
}

export default DisplayCookieCount;