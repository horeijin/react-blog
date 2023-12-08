import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/:id">Detail</Link>
        <Link to="/posts/new">New</Link>
        <Link to="/posts/edit">Edit</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Main</div>}></Route>
        <Route path="/posts" element={<div>Posts</div>}></Route>
        <Route path="/posts/:id" element={<div>Posts Detail</div>}></Route>
        <Route path="/posts/new" element={<div>Posts New</div>}></Route>
        <Route path="/posts/edit" element={<div>Posts Edit</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
