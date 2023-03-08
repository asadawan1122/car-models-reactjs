import { Route, BrowserRouter, Routes } from 'react-router-dom';
import CarModalList from './pages/CarModelList';
import CarDetails from './pages/CarDetails';
import UserDetails from './pages/UserDetails';
import Dashboard from './pages/Dashboard';
import DataTable from './pages/DataDetails';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route  path='/user-details' element={<UserDetails />} />
          <Route path='/car-modal-list' element={<CarModalList />} />
          <Route path='/card-details' element={<CarDetails />} />
          <Route path='/data-details' element={<DataTable />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;