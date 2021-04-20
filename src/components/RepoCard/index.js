import React from 'react';
import { BiGitRepoForked, BiStar,  } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

const RepoCard = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo-info">
                <a href={repo.url} target="_blank">
                    <h2>{repo.name}</h2>
                </a>
                <p>{repo.description}</p>
            </div>
            <div className="repo-details">
                <div className="forks">
                    <BiGitRepoForked /><span>{ repo.forks_count}</span>
                </div>
                <div className="stars">
                    <BiStar /><span>{ repo.stargazers_count}</span>
                </div>
                <div className="watchers">
                    <BsEyeFill /><span>{ repo.watchers_count}</span>
                </div>
            </div>
        </div>
    )
}

export default RepoCard;