import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './assets/components/Nav.js';
import Header from './assets/components/Header.js';
import Portfolio from './assets/components/Portfolio.js';
import About from './assets/components/About.js';
import Contact from './assets/components/Contact.js';
import Footer from './assets/components/Footer.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </>
    );
  }
}
