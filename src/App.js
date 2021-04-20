import React, { useState } from "react";
import { SearchForm, RepoList } from "./components";
import "./App.css";

function App() {
    const [username, setUsername] = useState("roselynle");

    return (
        <>
                <h1 id="main-heading">Your Repo Story</h1>
                <SearchForm setUsername={setUsername} />
                <div id="text-container">
                    <h3 aria-label="Form" id="Form">
                        {" "}
                        {username ? username : "Coder"}, your repositories
                        are below:
                    </h3>
                    <RepoList username={username} />
                </div>
        </>
    );
}

export default App;
