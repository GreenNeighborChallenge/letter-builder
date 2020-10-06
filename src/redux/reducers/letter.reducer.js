import update from 'immutability-helper';


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
        case 'DELETE_POLICY':
            letterState.body.map((petition_info, i) => {
                if (action.payload === petition_info[i]) {
                    const newData = update(letterState, { body: { $splice: petition_info[i] } })
                    console.log("this is the", newData)
                    return {
                        ...state,
                        body: [newData],
                    }
                } else
                    return state
            });
            break;
        default:
            return state;
    }
}


export default letterReducer