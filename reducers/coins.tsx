import {CREATE_COIN} from "../actions";
import {Coin} from "../objects/Coin";

export const coins = (state = [], action) => {
    switch (action.type){
        case CREATE_COIN: {
            let {name, tag} = action
            return [...state, new Coin(name, tag)]
        }

        default:
            return state
    }
}
