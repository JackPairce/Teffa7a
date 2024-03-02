import React, { useState, useEffect } from "react";
import ProfileStymes from "./Profile.module.css";
import Post from "./Post";
import pfp1 from "/pfp1.png";
import pfp2 from "/pfp2.png";
import pfp3 from "/pfp3.png";
function getRandomPfp() {
  const pfps = [pfp1, pfp2, pfp3];
  return pfps[parseInt(Math.random() * pfps.length)];
}

const server = "http://localhost:5000";
const tempUserID = "65e21478a66e02de59f696f1";
const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);

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
        } else {
          setposts([...posts]);
        }
        setLoading(true);
      });
  }, []);

  return (
    <div className={ProfileStymes.ProfilePage}>
      <div className={ProfileStymes.ProfileTitle}>
        <div className={ProfileStymes.PhotoName}>
          <img src={pfp1} alt="" />
          <h3>Dr name username</h3>
          <p>875 teffa7a</p>
        </div>

        <div className={ProfileStymes.profileInfos}>
          <div className={ProfileStymes.infoElement}>
            <p>email address : </p>
            <h3>longemail@address.com</h3>
          </div>
          <div className={ProfileStymes.infoElement}>
            <p>phone number : </p>
            <h3>0123456789</h3>
          </div>
          <div className={ProfileStymes.infoElement}>
            <p>local address : </p>
            <h3>69 Ave new avenue city / country</h3>
          </div>
        </div>
      </div>
      {!loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {posts.map((post, index) => (
            <Post
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
  );
};

export default ProfilePage;
