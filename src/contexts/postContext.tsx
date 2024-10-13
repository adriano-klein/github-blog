import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface profileProps {
  name: string;
  avatar: string;
  avatar_url: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
  id: number;
}

interface PostContextData {
  profile: profileProps;
  posts: Array<any>;
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostContext = createContext({} as PostContextData);

export function PostcontextProvider({ children }: PostProviderProps) {
  const [profile, setProfile] = useState({} as profileProps);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/users/adriano-klein").then((response) => {
      setProfile(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/repos/adriano-klein/github-blog/issues").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <PostContext.Provider value={{ profile, posts }}>
      {children}
    </PostContext.Provider>
  );
}
