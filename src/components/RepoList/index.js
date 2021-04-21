import React, { useState, useEffect } from 'react';
import { RepoCard, UserCard } from '..';


const API_URL = "https://api.github.com"

const RepoList = ({ username }) => {

    const [repos, setRepos] = useState();
    const [user, setUser] = useState();

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
        const getUser = async () => {
            try {
                const response = await fetch(`${API_URL}/users/${username}`);
                const data = await response.json();
                if (data.documentation_url === "https://docs.github.com/rest/reference/users#get-a-user") {alert("Error: not a valid user")}
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        }

        getRepos();
        getUser();
    }, [username]);

    const reposList = Array.isArray(repos) && repos.map(repo => <RepoCard key={repo.id} repo={repo} />);

    return (
        <section className="user-repos">
            {user && <UserCard user={user} />}
            {reposList}
        </section>
    )

}


export default RepoList;