import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  hasNavigation?: boolean;
}

type tabType = "all" | "my";

export const PostListComponent: FC<Props> = ({ hasNavigation = true }) => {
  const [activeTab, setActiveTab] = useState<tabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation-active" : ""}
          >
            All
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation-active" : ""}
          >
            My Article
          </div>
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
