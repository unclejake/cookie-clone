import React from 'react';
import {MyContext} from '../context/Context';

class BigCookie extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context) => {
                    return (
                        <React.Fragment>
                            <div 
                                className='bigcookie' 
                                onClick={e => context.state.dispatch({type: 'INCREMENT'})}
                            >
                                <h2>Click Me</h2>
                            </div>
                        </React.Fragment>
                    );
                }}
            </MyContext.Consumer>
        );
    }
}

export default BigCookie;