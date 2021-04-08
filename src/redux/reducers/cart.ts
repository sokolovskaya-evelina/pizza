
type initialStateType = typeof initialState
const initialState = {}


export const cart = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SOME_ACTION': {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

