import  store from './store/configureStore';
import { Provider } from 'react-redux';
import Main from './Main'; // replace with the path to your App component
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducer/index'; // replace with your rootReducer


const Root = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default Root;
