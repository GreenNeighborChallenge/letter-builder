const letterState = {
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
                body: [...state.body, action.payload[0].petition_info]
            };
        case 'SET_LETTER':
            return {
                ...state,
                subject: action.payload.subject,
                intro: action.payload.intro,
                conclusion: action.payload.conclusion
            };
        case 'DELETE_POLICY_FROM_LETTER':
            const newBody = state.body.filter((petition_info) => {
                //action.payload is unchanged petition_info from db
                console.log(petition_info);
                console.log(action.payload);
                if (action.payload === petition_info) {
                    return {
                        ...state,
                        body: [...state.body, '']
                    }
                } else return {
                    ...state,
                    body: [...state.body, petition_info]
                }
            })
            return {
                ...state,
                body: newBody
            }

        default:
            return state;
    }
}


export default letterReducer