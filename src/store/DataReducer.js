import * as actionTypes from './actionTypes';
const initialState = {
    data:{
        login:false,
        showList:false,
        dataArr: [],
        secondDataArr: []
    },
    loading:false
};

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPLOAD:{
            const newState = Object.assign({},state);
            newState.data.login = true;
            newState.data.dataArr = action.data;
            newState.data.secondDataArr = action.data2;
            newState.loading = false;
            return newState;
        }
        case actionTypes.LOADING_FALSE:{
            return{
                ...state,
                loading:false
            }
        }
        case actionTypes.LOADING_TRUE:{
            return{
                ...state,
                loading:true
            }
        }           
        default:
            return state;       
    }
};

export default dataReducer;