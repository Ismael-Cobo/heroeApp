import { types } from "../types/types";

const defaultState = {
    name: 'Ismael',
    logged: true
}


export const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case types.login:
            
            return {
                ...state,
                name: action.payload.name,
                logged: true
            }

        case types.logout:

            return {
                logged: false
            }

        default: 
            return state;
    }

}