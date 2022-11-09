import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ListItem from "./components/List/ListItem";
import Skeleton from "./components/skeleton/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setTimeout(() => {
      axios.get("https://randomuser.me/api/?results=10").then((res) => {
        setPosts((prev) => [...prev, ...res.data.results]);
      });
    }, 3000);
  };
  useEffect(() => {
    getPosts();
  }, []);
  const login = (e) => {
    e.preventDefault();
    if (user === "foo" && password === "bar") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark text-white">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          {isLoggedIn && (
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {isLoggedIn ? (
        <InfiniteScroll
          dataLength={posts.length}
          next={getPosts}
          hasMore={true}
          loader={Array.apply(null, { length: 10 }).map((e, i) => (
            <Skeleton key={i} />
          ))}
        >
          {posts.map((post, index) => (
            <ListItem key={index} result={post} />
          ))}
        </InfiniteScroll>
      ) : (
        <form className="container mt-3" onSubmit={login}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              User Id
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
