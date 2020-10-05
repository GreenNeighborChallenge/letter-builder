const letterState ={
    subject: '',
    intro: '',
    body: [],
    conclusion: ''
}

const letterReducer = (state = letterState, action) => {
    switch (action.type) {
        case 'SET_POLICY':
            return {
                ...state, 
                body: [...state.body, action.payload[0].petition_info]}
        default:
            return state;
    }
}


export default letterReducer