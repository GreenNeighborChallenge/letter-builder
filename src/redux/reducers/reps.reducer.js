const repsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_REPS':
            return action.payload;
        default:
            return state;
    }
}

export default repsReducer