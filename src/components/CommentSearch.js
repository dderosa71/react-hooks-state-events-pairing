import React from "react"

function CommentSearch({search, setSearch}) {

    function handleChange(event){
        setSearch(event.target.value)
    }
    return (
        <>
            <form>
                <label>
                    Search
                <input onChange={handleChange} type="text" value={search} name="text"/>
                </label>
            </form>
            <br></br>
        </>

    )
}

export default CommentSearch