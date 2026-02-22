import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote({ notes, setNotes }) {

  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title
    };

    setNotes([...notes, newNote]);

    navigate("/notes");
  };

  return (
    <div>
      <h2>Add Note</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;