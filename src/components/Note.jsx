import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Note = ({ id, onRemoveNote }) => {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  return (
    <div className={`p-4 bg-yellow-300 relative max-h-[32rem] overflow-hidden`}>
      <div className="absolute top-2 right-2">
        <button aria-label="Check Note" className="text-gray-700">
          <AiOutlineCheck size={20} />
        </button>
        <button
          aria-label="Close Note"
          className="text-gray-700"
          onClick={() => onRemoveNote(id)}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
      <textarea
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
      />
      <div className="flex space-x-2">
        {colorOptions.map((option, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
            aria-label={`Change color to ${option}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Note;
