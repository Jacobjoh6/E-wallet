

const initialState = {
    cards: [],
    activeCard: {}
}

const reducer =(state = initialState, action) => {
    switch(action.type){

        case'ADD':
        return {
            ...state,
            cards: [...state.cards, action.payload]
        }

        case'ACTIVE':
        return {
            ...state,
            activeCard: action.payload
        }

        case'DELETE':
        return {
            cards: state.cards.filter(elem => elem !== action.payload)
        }

        default:
            return state
    }
}

export { reducer }