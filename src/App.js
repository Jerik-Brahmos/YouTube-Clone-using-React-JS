import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js'
import Video from './Pages/Video Page/Video.js'
import { useState, useEffect } from 'react';
import Header from './Header.js'
import Axios from 'axios'
import { API_KEY } from './data.js'
import { createContext } from 'react';
export const AppContext = createContext();
function App() {
  const [menu, setmenu] = useState("true")
  const [category, setcategory] = useState(0)
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchitem = () => {
    Axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`)
      .then((res) => {
        setdata(res.data.items);
        setLoading(false); // set loading to false when data is fetched
      })
  }

  useEffect(() => {
    fetchitem();
  }, [category])

  return (
    <div className="App">
      <AppContext.Provider value={{ menu, setmenu, category, setcategory, data, setdata, loading, setLoading }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video />}></Route>
      </Routes>
    </AppContext.Provider>
    </div >
  );
}

export default App;
