import react from "react";

export default function ViewUpdate({views, date}){

    return(
        <div>
            {`${views} Views | Uploaded ${date}`}
        </div>
    )
}