
type initialStateType = typeof initialState
const initialState = {
    category: 0,
    sortBy: 'popular',
}

export const filters = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SET_SORT_BY': {
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        default:
            return state
    }
}

