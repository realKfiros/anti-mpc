export const openDrawer = () => {
    return (dispatch) => {
        dispatch({
            type: "open",
        });
    }
}


export const closeDrawer = () => {
    return (dispatch) => {
        dispatch({
            type: "close",
        });
    }
}