import { FC } from "react";
import { Header } from "components/Header";
import { ProfileComponent } from "components/ProfileComponent";
import { PostListComponent } from "components/PostListComponent";
import { Footer } from "components/Footer";

interface Props {}

export const Profile: FC<Props> = () => {
  return (
    <>
      <Header />
      <ProfileComponent />
      <PostListComponent hasNavigation={false} />
      <Footer />
    </>
  );
};
