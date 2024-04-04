import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.js'
import Video from './Pages/Video Page/Video.js'
import { useState } from 'react';
import Header from './Header.js'
function App() {
  const[menu,setmenu]=useState("true")
  return (
    <div className="App">
      <Header menu={menu} setmenu={setmenu} />
       <Routes>
        <Route path='/' element={<Home menu={menu} setmenu={setmenu} />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video menu={menu} setmenu={setmenu} />}></Route>
       </Routes>
      
    

    </div>
  );
}

export default App;
