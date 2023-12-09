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

interface Props {}

export const Router: FC<Props> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/posts/new" element={<PostNew />}></Route>
        <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
};
