import react from "react";

export default function CommentCard({user, comment}){
    return(
        <div>
             <div className="User">{user}</div>  
            <div>{comment}</div>
        </div>
    )
}