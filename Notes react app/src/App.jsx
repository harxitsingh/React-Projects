import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/add" element={<AddNote />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />



   </Routes>   
   </BrowserRouter>
    
  )
}

export default App;
