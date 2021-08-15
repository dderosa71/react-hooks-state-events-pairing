import React from "react"

function Comments({ comments, hidden, setDelete, deleteStatus }) {
    function onDelete(event){
        event.preventDefault()
        setDelete((currentDelete)=> currentDelete.push(event.target.className))
    }

    const commentList = comments.map(comment => (
        <div key={comment.id}>
            <p style={{fontWeight: 700}}>{comment.user}</p>
            <p>{comment.comment}</p>
            <button className={comment.id} onClick={onDelete}>Remove</button>
        </div>
    ))
    return (
        <div className={hidden ? "hidden" : "" }>

            <h2>{comments.length} Comments</h2>
            {commentList}
        </div>
    )
}

export default Comments