import React from 'react';

const API_URL = "https://api.github.com"

const repoData = ({ username }) => {

    const getRepos = async () => {
        try {
            const response = await fetch(`${API_URL}/${username}/repos`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    // const repos = getRepos().map;

    return (
        <section className="user-repos">

        </section>
    )

}


export default repoData;