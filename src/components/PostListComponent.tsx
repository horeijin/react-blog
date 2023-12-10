import { FC, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from "context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";

interface Props {
  hasNavigation?: boolean;
}

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
}

type tabType = "all" | "my";

export const PostListComponent: FC<Props> = ({ hasNavigation = true }) => {
  const [activeTab, setActiveTab] = useState<tabType>("all");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));

    data?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation-active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation-active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {posts?.length > 0 ? (
          posts?.map((post, i) => (
            <div key={post?.id} className="post__box">
              <Link to={`/posts/${post?.id}`}>
                <div className="post__profile-box">
                  <div className="post__profile" />
                  <div className="post__author-name">{post?.email}</div>
                  <div className="post__date">{post?.createdAt}</div>
                </div>
                <div className="post__title">{post?.title}</div>
                <div className="post__text">{post?.summary}</div>
              </Link>
              {post?.email === user?.email && (
                <div className="post__utils-box">
                  <div className="post__delete">Delete</div>
                  <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                    Edit
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
};
