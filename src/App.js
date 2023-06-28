import React, { useEffect, useState } from "react";
import Posts from "./componments/Posts";
import Pagination from "./componments/Pagination";
import "./App.css";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("res", res);
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  //change page
  const paginate = (currentNumber) => setCurrentPage(currentNumber);

  // get current posts

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(postPerPage);
  // console.log(posts.length);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        postsLength={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </div>
  );
}
