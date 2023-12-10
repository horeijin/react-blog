import { FC } from "react";
import { Header } from "components/Header";
import { LoginForm } from "components/LoginForm";
import { Footer } from "components/Footer";

interface Props {}

export const SignIn: FC<Props> = () => {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};
