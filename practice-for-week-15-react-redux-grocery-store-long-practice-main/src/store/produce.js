import produceData from '../mockData/produce.json'
const POPULATE = "produce/POPULATE"

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

const produceReducer = (state = {}, action) => {
    const newState = Object.assign({}, state)
    switch(action.type){
        case POPULATE:
            action.produce.forEach((produce) => {
                newState[produce.id] = produce;
            });
            return newState;
        default:
           return state;
    }
}

export default produceReducer