import { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PostListComponent } from "../../components/PostListComponent";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <div>
      <Header />
      <PostListComponent />
      <Footer />
    </div>
  );
};
