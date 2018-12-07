import React from 'react';
import {MyContext} from '../context/Context';


class StoreItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemCost: 1
        }
    }

    render() {
        return (
            <MyContext.Consumer>
                {(context) => {
                    return (
                        <div
                            className="storeitem"
                            onClick={() => context.state.dispatch({type: 'BUY_ITEM', itemCost: this.state.itemCost})}
                        >
                            {this.state.itemCost}
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default StoreItem;