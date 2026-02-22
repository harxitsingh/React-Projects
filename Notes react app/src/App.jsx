import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import NoteDetail from "./pages/NoteDetail";

function App() {

  const [notes, setNotes] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn React Router" },
    { id: 3, title: "Build Notes App" }
  ]);

  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

  <Route path="/notes" element={<Notes notes={notes} setNotes={setNotes} />} />

        <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />

        <Route path="/addnote" element={<AddNote notes={notes} setNotes={setNotes} />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;