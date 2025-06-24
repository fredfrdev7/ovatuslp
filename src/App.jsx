import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { GlobalStyle } from './globalstyle';


function App() {


  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Navigation /> 
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='/about' />
        <Route path='/logos' />
        <Route path='/medias' />
        <Route path='/websites' /> */}
      </Routes>
    </Router>
  )
}

export default App
