

function addCard(value) {
    
    return {
        type: 'ADD',
        payload:
        value
    } 
}

function activeCard(value) {

    return{
        type:'ACTIVE',
        payload:
        value
    }
}

export { addCard, activeCard }