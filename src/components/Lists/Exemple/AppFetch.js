import React, { useState, useEffect } from "react";

const AppFetch = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/team/search')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.name}</h2>
                        <p className="post-body">{post.players.name}</p>
                        <div className="button">
                            <div className="delete-btn">Delete</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AppFetch;