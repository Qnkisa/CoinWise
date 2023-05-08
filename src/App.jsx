import { useState } from 'react'
import './styles/App.css'
import Header from "./components/Header"
import Home from "./pages/Home"
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import {Routes,Route,BrowserRouter as Router, Link} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
