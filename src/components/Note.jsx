import { AiOutlineClose } from 'react-icons/ai';

function Note({ id, onRemoveNote }) {
  return (
    <div className="border border-black">
      <button onClick={() => onRemoveNote(id)}>
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
}

export default Note;
