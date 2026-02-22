import { useParams } from "react-router-dom";

function NoteDetail({ notes }) {

  const { id } = useParams();

  const note = notes.find(
    (n) => n.id === parseInt(id)
  );

  if (!note) {
    return <h2>Note Not Found</h2>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
    </div>
  );
}

export default NoteDetail;