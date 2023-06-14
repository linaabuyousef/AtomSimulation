import { Dispatch } from "redux";
import { electronService } from "../HTTP";
import { Electron } from "../types/Electron";
import {SphericalData} from '../types/SphericalData';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InitialState } from "../types/common";

export const SET_ELECTRON = 'SET_ELECTRON';
export const FETCH_ELECTRON_REQUEST = 'FETCH_ELECTRON_REQUEST';
export const FETCH_ELECTRON_SUCCESS = 'FETCH_ELECTRON_SUCCESS';
export const FETCH_ELECTRON_FAILURE = 'FETCH_ELECTRON_FAILURE';
export const ELECTRONS_FETCH = 'ELECTRONS_FETCH';
export const setElectron = (electron: Electron) => ({
  type: SET_ELECTRON,
  payload: electron
});

export const fetchElectronRequest = () => ({
  type: FETCH_ELECTRON_REQUEST,
});

export const fetchElectronSuccess = (data: Electron[], electronType: string, dimension: string, K: number, N: number, M?: number) => ({
  type: FETCH_ELECTRON_SUCCESS,
  payload: { data, electronType, dimension, K, N, M },
});

export const fetchElectronFailure = (error: string) => ({
  type: FETCH_ELECTRON_FAILURE,
  payload: error,
});

export const electronsFetch = () => ({
  type: ELECTRONS_FETCH,
  payload: true
});

  export type SetElectronAction = ReturnType<typeof setElectron>;
  export type FetchElectronRequestAction = ReturnType<typeof fetchElectronRequest>;
  export type FetchElectronSuccessAction = ReturnType<typeof fetchElectronSuccess>;
  export type FetchElectronFailureAction = ReturnType<typeof fetchElectronFailure>;
  
  export type ActionType = SetElectronAction | FetchElectronRequestAction | FetchElectronSuccessAction | FetchElectronFailureAction;
  
  export const fetchElectron = (electronType: string, dimension: string, K: number, N: number, M?: number) => {
    
    console.log("fetchElectron has been called");  // Add this line

    return (dispatch: Dispatch) => {
      dispatch(fetchElectronRequest());
      electronService.getElectron(electronType, N, K, dimension)
      .then(data => {
        console.log(data)
          dispatch(fetchElectronSuccess(data, electronType, dimension, K, N, M));
          dispatch(electronsFetch());  
          
      })
      .catch(error => {
          dispatch(fetchElectronFailure(error.toString()));
      });
    }
  }
  
  
  