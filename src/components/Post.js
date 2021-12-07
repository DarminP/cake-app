import React, { useState, useEffect } from "react";
import AddPost from "./AddPost";
import axios from "axios";
import PrintPost from "./PrintPost";
import Header from "./header";
import Footer from "./footer";


const Post = () => {
  const [isAddpost, setisAddpost] = useState(false);
  const [PostList, setPostList] = useState([]);
 
  function getPosts() {
    axios.get("https://localhost:44381/api/Posts").then((res) => {
      setPostList(res.data);
    });
  }
 
  useEffect(() => {
    getPosts();
  }, []);

  const AddPostOnclick = () => {
    setisAddpost(true);
  };
 
  function DeletePost(postid) {
    if (window.confirm("Are you sure you want to delete the post?")) {
      fetch("https://localhost:44381/api/Posts/" + postid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    }
  }

  return (
    <div className="postPage">
    <Header />
    <div className="presentationSection">
      <h2 className="postTitle">Posts</h2>
      {PostList.map((post) => {
        return (
          <div>
            <PrintPost title={post.title} description={post.description} />
            <button onClick={() => DeletePost(post.id)}>Delete</button>
          </div>
        );
      })}

      <button className="welcomeButton" onClick={AddPostOnclick}>
        <p>New Post</p>
      </button>
      {isAddpost && <AddPost></AddPost>}
    </div>
    <Footer />
    </div>
  );
};
export default Post;
