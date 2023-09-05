import { MdDeleteForever } from "react-icons/md";

const Notes = ({ id, text, date }) => {
  return (
    <>
      <div className="notes">
        <span>{text}</span>

        <div className="notes-footer">
          <span>{date}</span>
          <MdDeleteForever className="delete" size="1.3em" />
        </div>
      </div>
    </>
  );
};

export default Notes;
