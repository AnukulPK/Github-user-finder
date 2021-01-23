import React from 'react';
import "./UserItem.css";

function UserItem(props) {
    
    return (
        <div className="card text-center">
           <img src={props.user.avatar_url} alt="profile" className="round-img imagesize" />
           <h3>{props.user.login}</h3>
           <div>
               <a href={props.user.html_url} className="btn btn-dark btn-sm my-1">More</a>
           </div>
        </div>
    )
}

export default UserItem
