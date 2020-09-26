import React, { useEffect, useState } from 'react'
import './post.css'
import firebase from 'firebase'
import Avatar from "@material-ui/core/Avatar"
import { db } from '../firebase'

function Post(props) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    
    useEffect(() => {
        let unsubscribe
        if(props.postId){
            unsubscribe = db
                .collection("posts")
                .doc(props.postId)
                .collection("comments")
                .orderBy('timestamp','desc')
                .onSnapshot((snapshot) =>{
                    setComments(snapshot.docs.map((doc)=> doc.data()))
                })
        }
        return () => {
            unsubscribe();
        }
    },[props.postId])

    const  postComment = (event) => {
        event.preventDefault()
        db.collection('posts').doc(props.postId).collection("comments").add({
            comment: comment,
            username: props.user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }

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
            
            <div className='postcomments'>
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.comment}
                    </p>
                ))}
            </div>
            
            {props.user && (
                <form className='postcommentbox'>
                    <input className='postinput'
                        type='test'
                        placeholder='Add a comment...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} 
                    />
                    <button
                        className='postbutton'
                        disabled={!comment}
                        type='submit'
                        onClick={postComment}
                    >
                    Post
                 </button>
            </form>
            )}
            
        </div>
    )
}

export default Post
