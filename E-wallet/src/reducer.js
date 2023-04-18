

const initialState = {
    cards: [],
    activeCard: {}
}

const reducer =(state = initialState, action) => {
    switch(action.type){
        case'ADD':
        return {
            cards: [...state.cards, action.payload]
        }

        case'ACTIVE':
        return {
            activeCard: [...state.cards, action.payload]
        }
        default:
            return state
    }
}

export { reducer }