import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  hasNavigation?: boolean;
}

export const PostListComponent: FC<Props> = ({ hasNavigation = true }) => {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation-active">All</div>
          <div>My Article</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, i) => (
          <div key={i} className="post__box">
            <Link to={`/posts/${i}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">작성자</div>
                <div className="post__date">작성일</div>
              </div>
              <div className="post__title">게시글</div>
              <div className="post__text">작성 내용</div>
              <div className="post__utils-box">
                <div className="post__delete">delete</div>
                <div className="post__edit">edit</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
