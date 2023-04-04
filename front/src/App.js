import logo from './logo.svg';
import './App.css'
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { Suspense, useState } from 'react';
import { MyContext } from './components/myContext/MyContext';
import TestFetch from './components/testFetch/TestFetch';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

function App() {
  let [apiData ,setApiData] = useState(null);
  let [data, setData] = useState('');
  let [mentions ,setMentions] = useState(null);
  let [cloud, setCloud] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let [SearchInput, setSearchInput] = useState('');


  return (
    <MyContext.Provider value={{data, setData, apiData, SearchInput, cloud, setCloud, setSearchInput, setApiData, isLoading, setIsLoading, mentions, setMentions}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path={'/graphics/:name'} element={<TestFetch/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
