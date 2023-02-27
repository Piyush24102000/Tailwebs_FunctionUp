import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Get from './components/Get'
import View from './components/View'
import Add from './components/Add'
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/get' element = {<Get/>}/>
            <Route path = '/view' element = {<View/>} />
            <Route path = '/add' element = {<Add/>} />
            <Route path = '/update' element = {<Update/>}/>
            <Route path = '/delete' element = {<Delete/>}/>

        </Routes>
      </BrowserRouter>
    );
}

export default App;
