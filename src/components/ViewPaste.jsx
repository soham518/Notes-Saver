import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const ViewPaste = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();

  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <h2>Paste not found ⚠️</h2>;
  }
  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  }
  return (
    <div className="view-paste-container">
    <div className='viewPasteTitle'>
    <h2>{paste.title}</h2>
    <button className="copy-btn" onClick={() => handleCopy(paste.content)}>Copy</button>
    </div>
      
      <textarea value={paste.content} readOnly />
    </div>
  );
};

export default ViewPaste;