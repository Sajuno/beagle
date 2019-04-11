export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_HINT':
            return !state
        default:
            return state
    }
};
