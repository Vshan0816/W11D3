import produceData from '../mockData/produce.json'
export const ADDPRODUCE = "cart/ADDPRODUCE"
export const REMOVEPRODUCE = "cart/REMOVEPRODUCE"
export const addProduce = (produceId) => {
    return {
        type: ADDPRODUCE,
        produceId: produceId
    }

}
export const removeProduce = (produceId) => {
    return {
        type: REMOVEPRODUCE,
        produceId: produceId
    }

}
const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state)

    switch(action.type){
        case ADDPRODUCE:
            nextState[action.produceId] = { id: action.produceId, count: 1}
            return nextState
        case REMOVEPRODUCE:
            nextState[action.produceId] = {}
            return nextState
        default:
            return nextState
    }
}

export default cartReducer