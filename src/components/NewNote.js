const NewNote = () => {
  return (
    <div className="notes new">
      <textarea rows="8" cols="10" placeholder="Write the note here"></textarea>
      <div className="notes-footer">
        <small>200 remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default NewNote;
