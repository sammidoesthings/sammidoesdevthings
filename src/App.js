import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import ContactMe from './components/ContactMe';
import { Header, Footer } from './components/HeaderFooter'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<ContactMe/>}/>
        

      </Routes>
      <Footer/>

    {/* APP CONTAINER DIV ENDS HERE */}
    </div>
  );
}

export default App;