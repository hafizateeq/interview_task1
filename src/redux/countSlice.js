import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogCount: [],
};

const BlogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    blogCount: (state, action) => {
      state.blogCount.push(action.payload);
    },
  },
});

export const { blogCount } = BlogSlice.actions;
export default BlogSlice.reducer;
