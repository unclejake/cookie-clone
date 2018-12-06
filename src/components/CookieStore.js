import React from 'react';
import StoreItem from './StoreItem';

class CookieStore extends React.Component {

    render() {
        return(
            <div>
                <StoreItem />
                <StoreItem />
                <StoreItem />
            </div>
        );
    }
}

export default CookieStore;