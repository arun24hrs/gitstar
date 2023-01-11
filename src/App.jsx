
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import All from './pages/All';
import CssPage from './pages/CssPage.jsx';
import HtmlPage from './pages/htmlPage.jsx';
import JsPage from './pages/jsPage.jsx';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<All/>}>ALL</Route>
        <Route path='/html' element={<HtmlPage/>}>HTML</Route>
        <Route path='/css' element={<CssPage/>}>CSS</Route>
        <Route path='/javascript' element={<JsPage/>}>JavaScript</Route>
      </Routes>
    </div>
  )
}


export default App
