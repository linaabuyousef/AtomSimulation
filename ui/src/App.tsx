import  store from './store/configureStore';
import { Provider } from 'react-redux';
import Main from './Main'; 

const Root = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

export default Root;
