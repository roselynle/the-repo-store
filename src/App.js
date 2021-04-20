import React, { useState } from 'react'
import { SearchForm, RepoList } from './components';

import './App.css'

function App() {

  const [username, setUsername] = useState("");

  return (
    <>
      < SearchForm setUsername={setUsername} />
      <h3 aria-label="Form" id="Form"> {username ? username : 'Friend'}, Your repositories are below:</h3>
      < RepoList username={username} />
    </>
  )
}

export default App