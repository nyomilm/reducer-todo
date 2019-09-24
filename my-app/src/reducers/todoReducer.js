export const initialState = {
    input: '',
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                input: action.payload,

            };
        case 'ADD_ITEM':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        input: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ],
                input: ''
            };
        default:
            return state;
    }
};
