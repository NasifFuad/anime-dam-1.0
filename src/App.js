import React,{useEffect} from "react"
import { Routes,Route,Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>U CANT ESCAPE MUZAN</h1>
      <Link to="/home">unable</Link>
      <Link to="/contact">to run</Link>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>- Unknown Swordsman</h2>
    </main>
  );
}

function Contact() {
  return (
    <main>
      This is contact page my boyy
    </main>
  )
}
// make a calculato
export default App;
