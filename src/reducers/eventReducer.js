const eventReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        default:
            return state;
    }
};

export default eventReducer;
