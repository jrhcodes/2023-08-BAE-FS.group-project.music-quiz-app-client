import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import GamePlayer from './components/GamePlayer/GamePlayer'

document.title = 'SwapSounds from The A-Listers';
// test
function App() {
  return (
    <>
      <Header></Header>
      <GamePlayer></GamePlayer>
      <Footer></Footer>
    </>
  )
}

export default App
