import Install from './components/Install';
import Home from './components/Home';
import Intro from './components/Intro';
import Upload from './components/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './components/Payment';
import Navbar from './components/Navbar';

function App() {

  return(
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Intro/>}/>
      <Route path="/Upload" element={<Upload/>} />
      <Route path='/Mint' element={<Home/>} />
      <Route path='/Payment' element={<Payment/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;