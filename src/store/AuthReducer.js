import * as actionTypes from './actionTypes';
const initialState = {
    status:{
        login:false,
        auth:{},
        error:null
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_LOGIN:{
            const newState = Object.assign({},state);
            newState.status.login = true;
            newState.auth = action.authResponse;
            return newState;
        }
        case actionTypes.AUTH_LOGOUT:{
            const newState = Object.assign({},state);
            newState.status.login = false;
            return newState;
        }
        case actionTypes.AUTH_FAIL:{
            const newState = Object.assign({},state);
            newState.status.login = false;
            newState.status.error = action.error;
            return newState;
        }
        default:
            return state;     
    }
};


export default reducer;