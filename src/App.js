import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.js'
import Video from './Pages/Video Page/Video.js'
import { useState,useEffect } from 'react';
import Header from './Header.js'
import Axios from 'axios'
import { API_KEY } from './data.js'
function App() {
  const[menu,setmenu]=useState("true")
  const[category,setcategory]=useState(0)
  const[data, setdata] = useState([])
  const fetchitem = () => {
    Axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`)
      .then((res) => setdata(res.data.items))
  }

  useEffect(() => {
    fetchitem();
  }, [category])

  return (
    <div className="App">
      <Header menu={menu} setmenu={setmenu} />
       <Routes>
        <Route path='/' element={<Home menu={menu} setmenu={setmenu} category={category} setcategory={setcategory} data={data} setdata={setdata} />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video menu={menu} setmenu={setmenu} category={category} setcategory={setcategory} data={data} setdata={setdata}/>}></Route>
       </Routes> 
      
    </div>
  );
}

export default App;
