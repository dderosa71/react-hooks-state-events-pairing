import React from "react"

function CommentHider({setHidden}){

function handleHide(){
    return setHidden(current=>!current)
}
    return(
        <button onClick={handleHide}>Hide Comments</button>
    )
}

export default CommentHider