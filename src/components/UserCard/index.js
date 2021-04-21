import React from 'react';

const UserCard = ({user}) => {
    return (
        <section className="user">
            <div className="user-info">
            <a href={user.html_url} target="_blank">
                <h1>{user.login}</h1>
            </a>
             
            </div>
            <div className="user-avatar">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`}/>
            </div>
        </section>
    )
}

export default UserCard;