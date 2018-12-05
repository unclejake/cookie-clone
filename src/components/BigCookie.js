import React from 'react';

function BigCookie(props) {

    return(
        <div 
            className='bigcookie' 
            onClick={props.cookieClick}
        >
            <h2>Click Me</h2>
        </div>
    )
}

export default BigCookie;