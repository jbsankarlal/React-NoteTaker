import { MdDeleteForever } from "react-icons/md";

const Notes = () => {
  return (
    <>
      <div className="notes">
        <span>This is the first Note</span>
      </div>
      <div className="footer">
        <span>11/11/2003</span>
        <MdDeleteForever className="delete" size="1.3em" />
      </div>
    </>
  );
};

export default Notes;
