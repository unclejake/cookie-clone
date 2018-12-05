function incrementCurrentCookies(state, props) {
    return {
        currentCookies: state.currentCookies + 1
    }
}

export {incrementCurrentCookies};

function incrementTotalCookies(state, props) {
    return {
        totalCookies: state.totalCookies + 1
    }
}

export {incrementTotalCookies};