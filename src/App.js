import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from './pages/MainLayout';
import './App.css';
import Buysellpopup from './components/BuySellPopup';

function App() {
  const [modalShow, setModalShow] = React.useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<MainLayout />}>
            {/* <Route index  element={<Login /> } />
            <Route path='/login'  element={<Login /> } />
            <Route path='/register'  element={<Register /> } /> */}
            <Route path='/home' element={<Home /> } />
          </Route>
          
          {/* <Route path="/" element={<DashboardLayout />}>
            <Route path='/dashboard'  element={<Dashboard /> } />
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Buysellpopup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
