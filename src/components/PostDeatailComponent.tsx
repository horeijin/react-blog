import { FC } from "react";
import { Header } from "./Header";

interface Props {}

export const PostDetailComponent: FC<Props> = () => {
  return (
    <>
      <Header />
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">안녕하세요</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">작성자</div>
            <div className="post__date">작성일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">delete</div>
            <div className="post__edit">edit</div>
          </div>
          <div className="post__text">작성 내용</div>
        </div>
      </div>
    </>
  );
};
