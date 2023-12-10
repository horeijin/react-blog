import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "pages/home";
import { PostList } from "pages/posts";
import { PostDetail } from "pages/posts/detail";
import { PostNew } from "pages/posts/new";
import { PostEdit } from "pages/posts/edit";
import { Profile } from "pages/profile";
import { SignIn } from "pages/signin";
import { SignUp } from "pages/signup";

interface Props {
  isAuthenticated: boolean;
}

export const Router: FC<Props> = ({ isAuthenticated }) => {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<SignIn />} />
          </>
        )}
      </Routes>
    </>
  );
};
