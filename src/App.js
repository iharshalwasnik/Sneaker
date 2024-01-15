import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Orders from './components/Orders';
import Login from './components/Login';
import Styling from './components/Styling';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/styling" element={<Styling/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
