import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Post } from "../types/Post";
import { PostActions, postReducer } from "../reducers/postReducer";

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>
}
export const PostContext = createContext<PostContextType | null >(null);

export const PostProvider = ({children}: {children: ReactNode})=>{
    const [posts, dispatch] = useReducer(postReducer, []);

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostContext.Provider>
    )
}