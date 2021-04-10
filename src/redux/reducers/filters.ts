const initialState = {
    category: null as number | null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
}

export const filters = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_SORT_BY': {
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        case "SET_CATEGORY ": {
            return {
                ...state,
                category: action.payload
            }
        }
        default:
            return state
    }
}

//actions
export const setSortBy = (item: {type: string, order: string}) => ({type: 'SET_SORT_BY', payload: item} as const)
export const setCategory = (index: number | null) => ({type: 'SET_CATEGORY ', payload: index} as const)

//types
type ActionsType =
    | ReturnType<typeof setSortBy>
    | ReturnType<typeof setCategory>
type initialStateType = typeof initialState

