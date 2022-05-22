import react, {useState} from "react";
import Comments from "./Comments";

export default function Commentdata({video}){
    const [hidden, setHidden] = useState(false)

    function handleHideButton(){
        setHidden(
            prev=>!prev
        )
    }

    return(
        <div className="comment-data">
        <button onClick={handleHideButton} style={{ marginTop: "50px", display: 'block', display: 'center', left: '41.5%' }}>{hidden? 'Show' : "Hide"} Comments</button>

        { !hidden ? <Comments video={video} /> : null}
        </div>
    )
}