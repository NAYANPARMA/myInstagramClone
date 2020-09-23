import React from 'react'
import './post.css'
import Avatar from "@material-ui/core/Avatar"

function Post(props) {
    return (
        <div className="post">
            <div className="postHeader">
                <Avatar
                    className="postAvatar"
                    alt={props.username}
                    src = "/static/images/avatar/1.jpg"
                />
                <h3>{props.username}</h3>
            </div>
            <img className="postImage"
                src={props.imageUrl}
                alt = {props.username}
            />
            <h4 className="postText"><strong>{props.username} </strong>{props.caption}</h4>
            {/* caption */}
        </div>
    )
}

export default Post
