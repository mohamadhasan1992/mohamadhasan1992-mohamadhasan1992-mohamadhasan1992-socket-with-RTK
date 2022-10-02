import './App.css';
import ButtonContainer from './container/ButtonContainer';
import ForexData from './container/ForexData';
import MainLayout from './container/layout/MainLayout';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ConnectionStatus from "./components/ConnectionStatus"




function App() {

  return (
    <Provider store={store}>
      <MainLayout>
        <ButtonContainer />
        <ConnectionStatus />
        <ForexData />
      </MainLayout>
    </Provider>
  );
}

export default App;
