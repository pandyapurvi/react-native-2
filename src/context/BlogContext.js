import React, {useReducer} from 'react';

const BlogContext = React.createContext();
const initialState = [];

const blogReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'add_blogpost':
    return [...state, {title: `Blog post ${state.length + 1}`}];
    default:
      return state;

  }
}
export const BlogProvider = ({children}) => {
  const[blogPost, dispatch] = useReducer(blogReducer, initialState)

  const addBlogPost = () => {
    dispatch({type: 'add_blogpost'})
  }

  return (<BlogContext.Provider value={{data: blogPost, addBlogPost}}>
    {children}
  </BlogContext.Provider>
  )
};

export default BlogContext;