import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Book from './components/Book';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header'; 
import BookingForm from './components/BookingForm';
import { Route, Routes } from 'react-router-dom';

function App() {
   const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  return (
    <>
    <Header/>
    <Nav/>
    <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/book" element={<Book />}/>
      <Route path="/menu" element={<Menu />}/>
    </Routes>
    </>
  );
}

export default App;
