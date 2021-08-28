const initialState = close;

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "open":
            return state;
        case "close":
            return !state;
        default:
            return state
    }
}

export default reducer;