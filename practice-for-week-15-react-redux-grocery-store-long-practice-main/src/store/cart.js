import produceData from '../mockData/produce.json'
export const ADDPRODUCE = "cart/ADDPRODUCE"

export const addProduce = (produceId) => {
    return {
        type: ADDPRODUCE,
        produceId: produceId
    }

}
const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state)

    switch(action.type){
        case ADDPRODUCE:
            nextState[action.produceId] = { id: action.produceId, count: 1}
            return nextState
        default:
            return nextState
    }
}

export default cartReducer