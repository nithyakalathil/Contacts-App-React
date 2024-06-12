import logo from './logo.svg';
import './App.css';
import Addcontact from './components/Addcontact';
import Search from './components/Search';
import ViewCotact from './components/ViewCotact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addcontact/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<ViewCotact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
