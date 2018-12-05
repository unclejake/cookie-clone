import React from 'react';

class BigCookie extends React.Component {

    render() {
        return(
            <div 
                className='bigcookie' 
                onClick={this.props.cookieClick}
            >
                <h2>Click Me</h2>
            </div>
        );
    }
}

export default BigCookie;