import React,{useState} from 'react';
import "./UserItem.css";

function UserItem() {
    const[id,setId]=useState("id");
    const[login,setLogin]=useState("mojombo");
    const[avatarUrl, setAvatarUrl]=useState("https://avatars0.githubusercontent.com/u/1?v=4");
    const[htmlUrl, setHtmlUrl]=useState("https://github.com/mojombo");

    return (
        <div className="card text-center">
           <img src={avatarUrl} alt="profile-image" className="round-img imagesize" />
           <h3>{login}</h3>
           <div>
               <a href={htmlUrl} className="btn btn-dark btn-sm my-1">More</a>
           </div>
        </div>
    )
}

export default UserItem
