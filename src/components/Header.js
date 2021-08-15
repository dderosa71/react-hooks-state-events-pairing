import React from "react"

function Header({pageViews, uploadDate}) {
    return (
        <>
            <h1>Effren is the Goat</h1>
            <p>{pageViews} Views | Uploaded {uploadDate}</p>
        </>
    )
}

export default Header