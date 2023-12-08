import { FC } from "react";
import { Header } from "../../components/Header";
import { PostListComponent } from "../../components/PostListComponent";
import { Footer } from "../../components/Footer";

interface Props {}

export const PostList: FC<Props> = () => {
  return (
    <>
      <Header />
      <PostListComponent hasNavigation={false} />
      <Footer />
    </>
  );
};
