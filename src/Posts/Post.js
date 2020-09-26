import React, { useEffect, useState } from 'react'
import './post.css'
import Avatar from "@material-ui/core/Avatar"
import { db } from '../firebase'

function Post(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        let unsubscribe
        if(props.postId){
            unsubscribe = db
                .collection("posts")
                .doc(props.postId)
                .collection("comments")
                .onSnapshot((snapshot) =>{
                    setComments(snapshot.doc.map((doc)=> doc.data()))
                })
        }

        return () => {
            unsubscribe();
        }
    },[props.postId])
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
            
        </div>
    )
}

export default Post
