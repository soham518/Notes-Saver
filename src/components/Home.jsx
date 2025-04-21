import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="home-container">
      <h2>Welcome to Paste — A Notes Saver Application</h2>

      <div className="form-container">
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="button" onClick={createPaste}>
            {pasteId ? "Update" : "Create Paste"}
          </button>
        </div>

        <textarea
          value={value}
          placeholder="Enter your content"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;