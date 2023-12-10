import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";

interface Props {}

const onSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } catch (error: any) {
    toast.error(error?.code);
  }
};

export const ProfileComponent: FC<Props> = () => {
  const auth = getAuth(app);
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{auth?.currentUser?.email}</div>
          <div className="profile__name">
            {auth?.currentUser?.displayName || "user"}
          </div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSignOut}>
        SignOut
      </div>
    </div>
  );
};
