import { Link } from "react-router-dom";

function Notes({ notes, setNotes }) {

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>All Notes</h2>

      {notes.map((note) => (
        <div className="card" key={note.id}>
          
          <Link to={`/notes/${note.id}`} style={{ textDecoration: "none", color: "black" }}>
            <h3>{note.title}</h3>
          </Link>

          <button onClick={() => handleDelete(note.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Notes;