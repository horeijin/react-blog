import { FC } from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { PostListComponent } from "components/PostListComponent";
import { Carousel } from "components/Carousel";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <PostListComponent />
      <Footer />
    </div>
  );
};
