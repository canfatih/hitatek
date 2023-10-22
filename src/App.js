import { useEffect, useState,lazy,Suspense } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Navi } from './components/Navi';
import { MainContext } from './context';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const Main=lazy(()=>import ("./pages/Main"))
const Video=lazy(()=>import ("./pages/Video"))
const Live=lazy(()=>import ("./pages/Live"))
const Search=lazy(()=>import ("./pages/Search"))
const Features=lazy(()=>import ("./pages/Features"))
const Topics=lazy(()=>import ("./pages/Topics"))
const News=lazy(()=>import ("./pages/News"))
function App() {


const [dropdownOpen, setDropdownOpen] = useState(false);
const toggle = () => setDropdownOpen((prevState) => !prevState);
const {i18n}=useTranslation();
const[mockdata,setMockdata]=useState([]);

useEffect(()=>{
  fetchdatatr();
  

},[])
const  fetchdataen = async () => {
   await fetch("https://run.mocky.io/v3/115ec414-44de-4acc-b9a8-92b2f80970f6").then(res=>res.json()).then(data=>setMockdata(data))
  
  
}
const fetchdatatr=()=>{
  fetch("https://run.mocky.io/v3/04ca0b16-c42d-48e3-abe8-6a0064612505").then(res=>res.json()).then(dat=>setMockdata(dat))

}
const clickHandle= async (lang)=>{
 
await i18n.changeLanguage(lang)
console.log(i18n.language)
if(i18n.language==="en"){
  fetchdataen();
  
}
else{
  fetchdatatr();
}


}
  const data={
    mockdata,
    dropdownOpen,
    toggle,
   clickHandle,
  }
  return (
    <BrowserRouter>
    <MainContext.Provider value={data}>
    <Navi></Navi>
    <Suspense fallback={<h1>Loading...</h1>}>

   
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/topics" element={<Topics></Topics>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/live" element={<Live></Live>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
      </Suspense>
      <Footer></Footer>
    </MainContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
