import Install from './components/Install';
import Home from './components/Home';
import Intro from './components/Intro';

function App() {

  if (window.ethereum) {
    return <Intro />;
  } else {
    return <Install />
  }
}

export default App;