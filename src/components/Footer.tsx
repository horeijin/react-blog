import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import ThemeContext from "context/ThemeContext";

interface Props {}

export const Footer: FC<Props> = () => {
  const context = useContext(ThemeContext);

  return (
    <footer>
      <Link to="/posts/new">Write</Link>
      <Link to="/posts">List</Link>
      <Link to="/profile">Profile</Link>
      <>
        {context.theme === "light" ? (
          <BsSun onClick={context.toggleMode} className="footer__theme-btn" />
        ) : (
          <BsMoonFill
            onClick={context.toggleMode}
            className="footer__theme-btn"
          />
        )}
      </>
    </footer>
  );
};
