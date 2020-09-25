import React, { Component } from 'react'
import Post from './Post'
import { db } from '../firebase'
class Posts extends Component {
    state = {
        posts:[]
    }
    componentDidMount = () => {
        db.collection('posts').onSnapshot( async snapshot => {
            const posts = []
            snapshot.docs.map(async doc => {
                const data = {post: doc.data(), id:doc.id}
                posts.push(data)
            })
            this.setState({posts:posts})
        })
    }
    
    render() {
        const posts = this.state.posts.map(({post,id}) => {
            return <Post key={id} username = {post.username}  imageUrl= {post.imageUrl} caption = {post.caption}/>
         })
        
        return (
            <div>
                {posts}
            </div>
        )   
    }
}

export default Posts
// import React ,{useState , useEffect} from 'react'
// import Post from './Post'
// import { db } from '../firebase'


// function Posts() {
//     const [posts,setPosts] = useState([])

//     useEffect(() => {
//         db.collection('posts').onSnapshot( snapshot => {
//             setPosts(snapshot.docs.map( doc => doc.data()))
//         })
//     },[])
//     console.log("Hello")
//     return (
//        posts.map( post => {
//            return <Post username = {post.username}  imageUrl= {post.imageUrl} caption = {post.caption}/>
//         })
//     )   
// }




// export default Posts
