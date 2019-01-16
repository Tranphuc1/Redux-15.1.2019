import UP_DATA from '../actions/actionType';

const defaultState ={item:{}}
export default reducer = (state = defaultState,action) =>{
    switch(action.type){
        case UP_DATA:
            return {item:action.item};
        default:
            return state;
    }
}