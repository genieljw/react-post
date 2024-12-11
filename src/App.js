import React, { useState } from 'react';
import Header from './Header';
import PostList from './PostList';
import PostForm from './PostForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // 추가된 CSS 파일 임포트




function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "이것은 첫 번째 게시물입니다." },
    { id: 2, title: "두 번째 글", content: "이것은 두 번째 게시물입니다." },
  ]);

  const addPost = (title, content) => {
    const newPost = { id: posts.length + 1, title, content };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Header />
      <PostForm addPost={addPost} /><br/>
      <PostList posts={posts} />
    </div>
  );
}

export default App;