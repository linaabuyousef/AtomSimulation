import {
    SET_ELECTRON,
    FETCH_ELECTRON_REQUEST,
    FETCH_ELECTRON_SUCCESS,
    FETCH_ELECTRON_FAILURE,
    ELECTRONS_FETCH
} from '../actions/electron';
import {InitialState} from '../types/common'; 

const initialState: InitialState = {
  electron: [],
  electronsFetch: false,
  K: 0,
  N: 0,
  dimension: '',
  type: ''
};

export const electron = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_ELECTRON:
            return {
                ...state,
                electron: [...state.electron, action.payload],
            };
        case FETCH_ELECTRON_REQUEST:
            return {
                ...state,
            };
        case FETCH_ELECTRON_SUCCESS:
            return {
                ...state,
                electron: action.payload.data,
                type: action.payload.electronType,
                dimension: action.payload.dimension,
                K: action.payload.K,
                N: action.payload.N,
            };
        case FETCH_ELECTRON_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ELECTRONS_FETCH:
            return{
                ...state,
                electronsFetch: action.payload,
            };
        default:
            return state;
    }
};