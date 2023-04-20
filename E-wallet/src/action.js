

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

function deleteCard(value) {
    return {
        type: 'DELETE',
        payload:
        value
    }
}

export { addCard, activeCard, deleteCard }