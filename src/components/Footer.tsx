import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <footer>
      <Link to="/posts/new">Write</Link>
      <Link to="/posts">List</Link>
      <Link to="/profile">Profile</Link>
    </footer>
  );
};
