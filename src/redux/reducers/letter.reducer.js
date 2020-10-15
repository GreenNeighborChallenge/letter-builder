const letterState = {
    subject: '',
    intro: '',
    body: [],
    bodyIds: [],
    conclusion: '',
}

const letterReducer = (state = letterState, action) => {
    switch (action.type) {
        case 'SET_POLICY':
            return {
                ...state,
                body: [...state.body, (action.payload.policy + '\n')],
                bodyIds: [...state.bodyIds, action.payload.id]
            };
        case 'SET_LETTER':
            return {
                ...state,
                subject: action.payload.subject,
                intro: action.payload.intro,
                conclusion: action.payload.conclusion
            };
        case 'DELETE_POLICY_FROM_LETTER':
            const body = state.body
            const removingItem = action.payload + '\n'
            const newBody = body.filter(petition => {
                if (removingItem === petition) {
                    return false
                } else if (state.body.length === 1) {
                    return { ...state, body: [] }
                } else return true
            })

            return {
                ...state,
                body: newBody
            }
        case 'SET_FULL_LETTER':
            return action.payload
        case 'DELETE_BODY':
            return { ...state, body: [], bodyIds: [] }
        default:
            return state;
    }
}


export default letterReducer