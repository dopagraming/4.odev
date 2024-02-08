import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
let id = 0;
function App() {
  const [post, setPost] = useState("");
  const [posts, setposts] = useState([]);
  const removeItem = (idToRemove) => {
    setposts((items) => items.filter((item) => item.id !== idToRemove));
  };
  return (
    <div className="App">
      <h2>Paylasim Yap</h2>
      <p>Bir Metin Girinz</p>
      <textarea
        type="text"
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          ++id;
          setposts([...posts, { id, post }]);
        }}
      >
        Paylas
      </button>
      <h4>Paylasilanlar</h4>
      <PostList value={posts} removeItem={removeItem} />
    </div>
  );
}

export default App;
