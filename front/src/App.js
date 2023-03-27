import logo from './logo.svg';
import './App.css'
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import { MyContext } from './components/myContext/MyContext';
import TestFetch from './components/testFetch/TestFetch';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

function App() {
  let [data ,setData] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  return (
    <MyContext.Provider value={{data, setData, isLoading, setIsLoading}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/test' element={<TestFetch/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
