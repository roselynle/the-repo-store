import React, { useState, useEffect } from 'react';
import { RepoCard } from '..';


const API_URL = "https://api.github.com"

const RepoList = ({ username }) => {

    const [repos, setRepos] = useState();

    useEffect(() => {
        const getRepos = async () => {
            try {
                const response = await fetch(`${API_URL}/users/${username}/repos`);
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(error);
            }
        }
        getRepos();
    }, [username]);
   
    // 
    console.log(repos);
    const reposList = Array.isArray(repos) && repos.map(repo => <RepoCard key={repo.id} repo={repo} />);

    return (
        <section className="user-repos">
            {reposList}
        </section>
    )

}


export default RepoList;