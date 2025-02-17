import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/Search" element={<SearchStudent/>}/>
      <Route path="/Delete" element={<DeleteStudent/>}/>
      <Route path="/View" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
