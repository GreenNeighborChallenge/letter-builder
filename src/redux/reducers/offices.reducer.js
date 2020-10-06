const offices = (state = {}, action) => {
    switch (action.type) {
        case 'PUT_OFFICES':
            return action.payload;
        default:
            return state;
    }
}

export default offices