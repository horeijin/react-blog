import { FC } from "react";
import { Header } from "components/Header";
import { SignUpForm } from "components/SignUpForm";

interface Props {}

export const SignUp: FC<Props> = () => {
  return (
    <>
      <Header />
      <SignUpForm />
    </>
  );
};
