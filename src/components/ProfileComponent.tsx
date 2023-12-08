import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

export const ProfileComponent: FC<Props> = () => {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">aaa@gmail.com</div>
          <div className="profile__name">피카츄</div>
        </div>
      </div>
      <Link to={"/"} className="profile__logout">
        SignOut
      </Link>
    </div>
  );
};
