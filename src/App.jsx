import Install from './components/Install';
import Home from './components/Home';
import Intro from './components/Intro';
import Upload from './components/Upload';

function App() {

  if (window.ethereum) {
    return <Upload />;
  } else {
    return <Install />
  }
}

export default App;