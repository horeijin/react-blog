import { FC } from "react";
import { PostDetailComponent } from "components/PostDeatailComponent";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

interface Props {}

export const PostDetail: FC<Props> = () => {
  return (
    <>
      <Header />
      <PostDetailComponent />
      <Footer />
    </>
  );
};
