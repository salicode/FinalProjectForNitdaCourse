 
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Book from './components/Book';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/book" element={<Book />}/>
      <Route path="/menu" element={<Menu />}/>
    </Routes>
    </div>
  );
}

export default App;
