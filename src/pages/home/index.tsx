import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">Write</Link>
          <Link to="/posts">List</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </header>
      <div className="post-list">Posts List</div>
      <footer>
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
      </footer>
    </div>
  );
};
