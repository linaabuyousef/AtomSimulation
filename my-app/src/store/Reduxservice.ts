// ReduxService.ts
import { fetchElectron } from '../actions/electron';
import  store from './configureStore';

class ReduxService {
  get electron() {
    return store.getState().electronState;
  }

  fetchElectron(type: string, dimension: string, K: number, N: number, M?: number) {
    store.dispatch(fetchElectron(type, dimension, K, N, M));
  }
}

export const reduxService = new ReduxService();
