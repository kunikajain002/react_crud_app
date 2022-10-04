import logo from './logo.svg';
import './App.css';

//coponent
import NavBar from './components/NavBar';
// import CRUDApp from './components/CRUDApp';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//<Route path="/" element={ <CRUDApp />} />
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
