import axios from "axios";
import { useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import { postType } from "../../common/types";


const Home = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  console.log("🚀 ~ Home ~ posts:", posts);

  useEffect(() => {
    axios
      .get("http://localhost:5000/post/all")
      .then(({ data }) => setPosts(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex items-center justify-center mt-20 pb-24">
      <div className="w-fit grid grid-cols-3 gap-16">
        {posts.map((post) => (
          <div key={post._id}>
            <ImageContainer
              title={post.title}
              description={post.description}
              url={post.image}
              id={post._id}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
