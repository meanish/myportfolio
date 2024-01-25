const ShowNav = (state, action) => {
    switch (action.type) {
        case "SET_SHOW_NAV":
            return { ...state, show: "true", }
        case "SET_HIDE_NAV":
            return { ...state, show: "false", }
        default:

            return state;
    }
}

export default ShowNav;
