import React from "react"

function Liker({ upvotes, downvotes, setDownvotes, setUpvotes }) {
    function handleUpvote(){
        setUpvotes(upvote=>upvote+=1)
    }
    function handleDownvote(){
        setDownvotes(test=>test+1)
        }

    return (
        <>
            <button onClick={handleUpvote}>{upvotes} 👍</button>
            <button onClick={handleDownvote}>{downvotes} 👎</button>
            <br></br>
            <br></br>
        </>

    )

}

export default Liker