import { FC } from "react";
import { Header } from "components/Header";
import { PostForm } from "components/PostForm";

interface Props {}

export const PostNew: FC<Props> = () => {
  return (
    <>
      <Header />
      <PostForm />
    </>
  );
};
