import Install from './components/Install';
import Home from './components/Home';
import Intro from './components/Intro';
import Upload from './components/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/Upload" element={<Upload/>} />
      <Route path='/Mint' element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;