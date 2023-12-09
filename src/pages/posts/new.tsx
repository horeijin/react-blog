import { FC } from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

interface Props {}

export const PostNew: FC<Props> = () => {
  return (
    <>
      <Header />
      <div> 포스트 폼</div>
      <Footer />
    </>
  );
};
