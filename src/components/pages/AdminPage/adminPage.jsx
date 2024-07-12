return (
    <>
    <div id="header">
        Welcome {/*Admin Name*/} 
    </div>
    <div id="addGame">
        <input 
            className="inputButton"
            type="button"
            value={"Add Game"}/>
    </div>
    <div id="editGame">
        <input 
            className="inputButton"
            type="button"
            value={"Edit Game"}/>
    </div>
    <div id="deleteGame">
        <label for="deleteGame">Enter game ID</label>
        <input 
            className="inputContainer"
            type="text"
            value={"deleteGame"}/>
    </div>
    <div id="deleteGamebutton">
        <input 
            className="inputButton"
            type="button"
            value={"deleteGameButton"}/>
    </div>
    </>
)

export default adminPage
