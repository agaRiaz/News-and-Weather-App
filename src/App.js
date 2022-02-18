

import Navbar from './components/Navbar';
import Both from './components/Both';
import {Routes,Route,Navigate} from "react-router-dom";
import Weather from './components/Weather';
import News from './components/News';



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

    
    </>
  );
}

export default App;
