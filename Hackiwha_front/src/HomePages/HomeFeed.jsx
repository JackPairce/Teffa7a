import React, { useEffect, useState } from "react";
import HomeStyles from "./Home.module.css";
import FeedHeader from "./FeedHeader";
import Post from "./Post";
import ForYouElement from "./ForYouElement";
import AddPost from "./AddPost.jsx";
import pfp1 from "/pfp1.png";
import pfp2 from "/pfp2.png";
import pfp3 from "/pfp3.png";
function getRandomPfp() {
  const pfps = [pfp1, pfp2, pfp3];
  return pfps[parseInt(Math.random() * pfps.length)];
}
// import 'dotenv/config'

// const server = process.env.BackEnd
const server = "http://localhost:5000";

const tempUserID = "65e21478a66e02de59f696f1";

const HomeFeed = (props) => {
  const [posts, setposts] = useState([]);
  const [medics, setMedics] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setnewText] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${server}/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: tempUserID }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setposts([...data.articles]);
          setMedics([...data.submedics]);
        } else {
          setMedics(...medics);
          setposts([...posts]);
        }
        setLoading(true);
      });
  }, []);

  const handleSendPost = () => {
    if (newTitle.trim() !== "" && newText.trim() !== "") {
      const newPost = {
        title: newTitle,
        content: newText,
        // user: ,
        votesNumber: 0,
        nbComments: 0,
      };
      setposts([...posts, newPost]);
      setNewTitle("");
      setnewText("");
    }
  };

  return (
    <div className={HomeStyles.mainFeedCore}>
      <div className={HomeStyles.actualFeed}>
        <FeedHeader />
        {!loading ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <AddPost
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newText={newText}
              setNewText={setnewText}
              handleSendPost={handleSendPost}
            />
            {posts.map((post, index) => (
              <Post
                setIsCommenting={props.setIsCommenting}
                key={post._id ? post._id : post.title}
                title={post.title}
                content={post.content}
                user={post.user}
                submedicPFP={getRandomPfp()}
                nbVotes={post.votesNumber}
                nbComments={post.nbComments}
              />
            ))}
          </>
        )}
      </div>

      <div className={HomeStyles.detailSection}>
        <div className={HomeStyles.detailElement}>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            commodi, at min a amet ad quia veritatis laudantium rerum, fuga
            obcaecati labore
          </p>
        </div>
        <div className={HomeStyles.detailElement}>
          <h3>For you</h3>
          {medics.map((medic, i) => (
            <ForYouElement key={i} medic={medic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
