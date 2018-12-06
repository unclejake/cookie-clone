import React from 'react';
import {MyContext} from '../context/Context';

function DisplayCookieCount(props) {

    return(
        <div>
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <h2>Current Cookies: {context.state.currentCookies}</h2>
                        <h2>Total Cookies: {context.state.totalCookies}</h2>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        </div>
    )
}

export default DisplayCookieCount;