import React from 'react';

function DisplayCookieCount(props) {

    return(
        <div>
            <h2>Current Cookies: {props.currentCookies}</h2>
            <h2>Total Cookies: {props.totalCookies}</h2>
        </div>
    )
}

export default DisplayCookieCount;