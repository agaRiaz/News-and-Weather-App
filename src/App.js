

import Navbar from './components/Navbar';
import Both from './components/Both';
import { Routes, Route, Navigate } from "react-router-dom";
import Weather from './components/Weather';
import News from './components/News';
import Footer from './components/Footer';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Both />} />
        <Route path="/news" element={<News />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
