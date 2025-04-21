import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!");
  }

  return (
    <div className="pastes-container">
      <h2>List of Pastes</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id} className="paste-card">
              <h3>{paste.title}</h3>
              <div>{paste.content}</div>
  
              <div className="paste-buttons">
                <button onClick={() => navigate(`/?pasteId=${paste._id}`)}>Edit</button>
                <button onClick={() => navigate(`/pastes/${paste._id}`)}>View</button>
                <button onClick={() => handleDelete(paste._id)}>Delete</button>
                <button onClick={() => handleCopy(paste.content)}>Copy</button>
              </div>
  
              <div className="paste-date">
                <h4>Date: {paste.createdAt}</h4>
              </div>
            </div>
          ))
        ) : (
          <h2>No Pastes Found</h2>
        )}
      </div>
    </div>
  );
};

export default Pastes;