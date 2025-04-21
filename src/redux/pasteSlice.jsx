import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully ✅");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
    
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully ✏️");
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("All Paste Removed Successfully");
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter((item) => item._id !== pasteId);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Deleted Successfully 🗑️");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
