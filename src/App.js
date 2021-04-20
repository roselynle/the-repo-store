import React, { useState } from 'react'
import { SearchForm, RepoList } from './components';

import './App.css'

function App() {

  const [username, setUsername] = useState("theduckfliesagain");

  return (
    <>
      <h1>Hello World!</h1>

      < RepoList username={username} />
    </>
  )
}

export default App