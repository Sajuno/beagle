export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_GAME':
            return !state
        default:
            return state
    }
};
