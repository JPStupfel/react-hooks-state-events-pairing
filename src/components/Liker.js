import react from "react";

export default function Liker(
    {
    likes,
    dislikes,
    likeCallBack,
    dislikeCallBack
    }
){

    return(
        <>
            <button onClick={likeCallBack}>{`${likes}👍`}</button>
            <button onClick={dislikeCallBack}>{`${dislikes}👎`}</button>
        </>
    )
}