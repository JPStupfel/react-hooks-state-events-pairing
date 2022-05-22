import react from "react";
import CommentCard from "./CommentCard";

export default function Comments({video}){

   

   const commentCards = video.comments.map(e=>
        <CommentCard user={e.user} comment={e.comment} key={e.id} />
       )
   


return(
        <>
        <div className="comment-header">{commentCards.length} Comments</div>
        <div>{commentCards}</div>
        </>
)
}