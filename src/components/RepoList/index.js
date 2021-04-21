import React, { useState, useEffect } from 'react';
import { RepoCard, UserCard } from '..';
import axios from "axios";


const API_URL = "https://api.github.com"

const RepoList = ({ username }) => {

    const [repos, setRepos] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/users/${username}`);
                setUser(data);
                // setError();
            } catch (error) {
                setUser();
                console.error(error);
            }
        }
        const getRepos = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/users/${username}/repos`);
                setRepos(data);
            } catch (error) {
                setUser();
                console.error(error);
            }
        }

        getUser();
        getRepos();
    }, [username]);

    const reposList = Array.isArray(repos) && repos.map(repo => <RepoCard role="listitem" key={repo.id} repo={repo} />);

    return (
        <section className="user-repos">
            {user && <UserCard user={user} />}
            {reposList}
        </section>
    )

}


export default RepoList;