import video from "../data/video.js";
import Videocard from "./Videocard.js"
import ViewUpdate from "./ViewUpdate.js";
import Liker from "./Liker.js";
import Commentdata from  "./Commentdata"
import react, {useState} from "react";


function App() {
  const [views, setViews] = useState(video.views)

  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)

  function handleLike(){
    setLikes(
      likes=>likes+1
    )
  }

  function handleDislike(){
    setDislikes(
      (dislikes)=> dislikes - 1
    )
  }

  console.log(video.views);

  return (
    <div className="App">
      <Videocard className="video" video={video}/>
      <ViewUpdate views={views} date={video.createdAt}/>
      <Liker
      likes={likes}
      dislikes={dislikes}
      likeCallBack={handleLike}
      dislikeCallBack={handleDislike}
       />
       <Commentdata video={video}/>
    </div>
  );
}

export default App;

/*
APP
      |--Video
      |--Title
      |--ViewUploadCount

|--CommentBar
    --hideCommentsButton
    --CountComment 
    --Comments


+++state ==> [likes, dislikes (put in app), commentsArray(put in Comments Bar)]

*/