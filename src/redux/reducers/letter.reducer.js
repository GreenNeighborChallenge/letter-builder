const letterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POLICY':
            return {
            ...state,
            body: action.payload
            }
        default:
            return state;
    }
}


export default letterReducer