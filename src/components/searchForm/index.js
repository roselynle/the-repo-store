import React, {useState} from "react";
import './style.css'

const SearchForm = () => {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("");
    };
     return (
        <>
        <h3 aria-label="Form" id="Form"> {username ? username : 'Friend'}, Your repositories are below:</h3>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">GitHub Username: </label>
          <input type="text" id="username" name="username" placeholder="Please enter your username" value={nameInput} onChange={handleInput}/>
          <input type="submit" value="Submit"/>
        </form>
        </>
    )

};


    
export default SearchForm;
