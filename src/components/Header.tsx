import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        React Blog
      </Link>
      <div>
        <Link to="/posts/new">Write</Link>
        <Link to="/posts">List</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};
