import video from "../data/video.js";
import Header from "./Header.js"
import Liker from "./Liker.js"
import CommentHider from "./CommentHider"
import React, { useState } from "react"
import Comments from "./Comments.js"
import CommentSearch from "./CommentSearch"


function App() {
  console.table(video);
  const [currentUpvotes, setUpvotes] = useState(video.upvotes);
  const [currentDownvotes, setDownvotes] = useState(video.downvotes);
  const [hidden, setHidden] = useState(false)
  const [search, setSearch] = useState("")
  const [deleteStatus, setDelete] = useState([])

  const filteredComments = video.comments.filter(comment => {
    if(deleteStatus.includes(comment.id)){
      return false
    }
    else if (search === "") {
      return true
    }
    else if (comment.comment.includes(search)) {
      return true
    }
  })

  return (
    <div className="App">
      <iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/nfMyZk4e-0o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <li>
        <Header pageViews={video.views} uploadDate={video.createdAt} />
        <Liker upvotes={currentUpvotes} downvotes={currentDownvotes}
          setDownvotes={setDownvotes} setUpvotes={setUpvotes} />
        <CommentSearch search={search} setSearch={setSearch} />
        <CommentHider hidden={hidden} setHidden={setHidden} />
        <Comments deleteStatus={deleteStatus} setDelete={setDelete} comments={filteredComments} hidden={hidden} />
      </li>
    </div>
  );
}

export default App;
